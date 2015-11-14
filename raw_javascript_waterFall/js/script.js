/*
*   author:belongcai
*   data:2015/11/13
*   functionality: 
*       1.window.onload : load function waterFall
*       2.waterFall ; make sure the img block in right cols
*       3.checkScrollSlide : judge if the page needs to be loaded
* 
* */
window.onload = function () {
    waterFall('main', 'box');
    var dataInt = {
        "data" :[
            {"src" : "1.jpg"},
            {"src" : "2.jpg"},
            {"src" : "3.jpg"},
            {"src" : "4.jpg"},
            {"src" : "5.jpg"},
            {"src" : "10.jpg"},
            {"src" : "20.jpg"},
            {"src" : "30.jpg"},
            {"src" : "40.jpg"},
            {"src" : "70.jpg"},
            {"src" : "90.jpg"},
            {"src" : "31.jpg"}
        ]
    };
    //loading fake data using json when scroll
    window.onscroll = function(){
        var oParent = document.getElementById("main");
        if (checkScrollSlide){
            for(var i=0; i<dataInt.data.length ; i +=1){
                var oBox=document.createElement('div');
                oBox.className='box';
                oParent.appendChild(oBox);
                var pic=document.createElement('div');
                pic.className = 'pic';
                oBox.appendChild(pic);
                var img=document.createElement('img');
                img.src = "images/"+dataInt.data[i]["src"];
                pic.appendChild(img);
            }
            waterFall("main" , "box");

        };

    }
}
function waterFall(parent,box) {
    var oParent=document.getElementById(parent);
    //get class called box
    var oBox=getClass(oParent,box);
    //calculate cols
    var oBoxW=oBox[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth / oBoxW);
    oParent.style.cssText = "width:" + cols * oBoxW + "px;margin: 0 auto";

    //sort the images
    var hArr=[];//store cols' height

    for(var i=0 ; i< oBox.length ;i++){
        if(i < cols){
            hArr.push(oBox[i].offsetHeight);
        }else{
            var minH= Math.min.apply(null , hArr);
            var minIndex = getMinIndex(hArr , minH) ;
            oBox[i].style.position = 'absolute';
            oBox[i].style.top = minH + 'px';
            oBox[i].style.left = oBox[minIndex].offsetLeft + 'px';
            hArr[minIndex]+=oBox[i].offsetHeight;
        }
    }
    console.log("minH"+minH);
    console.log("minIndex" + minIndex);
    console.log(hArr);
}
//GetClass and another way is document.getElementsByClassName()
function  getClass(parent,clsName){
    var boxArr=[],//store box of className  array
        oElements=parent.getElementsByTagName('*');
    for(var i=0; i< oElements.length ; i+=1){
        if(oElements[i].className === clsName){
            boxArr.push(oElements[i]);
        }

    }
    return boxArr;

}
// get minIndex from hArr
function  getMinIndex(hArr,minH) {
    for(var i =0; i <hArr.length; i +=1){
        if(hArr[i] === minH){
            return i;
        }
    }
}
function checkScrollSlide() {
    var oParent=document.getElementById('main');
    var oBoxs=getClass(oParent,'box');
    var lastBoxH=oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length - 1] / 2);
    var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
    //client height
    var clientHeight=document.documentElement.clientHeight || document.body.clientHeight;
    return (lastBoxH < scrollTop + clientHeight ?true : false);



}