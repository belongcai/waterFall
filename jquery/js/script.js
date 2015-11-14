/**
 * Created by belongcai on 2015/11/14.
 * function:
 *  Payattention on the way of jquery
 *      $.inArray(value,array) return the index of value in array
 *      $.eq
 *      $.outerWidth() or outerHeight() including the padding and border
 *      closet
 *      $.offset() .left/.top or $.offset({left:xx,top:xx})
 *      $('div')  create div element
 */
$(window).on('load' , function () {
    waterFall();
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
    $(window).on('scroll', function () {
         if (checkScrollSlide()){
             $.each(dataInt.data, function (index,value) {
                 var oBox=$('<div>').addClass('box').appendTo($('#main'));
                 var pic=$('<div>').addClass('pic').appendTo($(oBox));
                 $('<img>').attr('src', '../raw_javascript_waterFall/images/'+$(value).attr('src')).appendTo(pic);
             })
             waterFall();
         }
    })
})
function waterFall() {
    var $boxs=$('#main>.box');
    console.log($boxs.length);
    var w=$boxs.eq(0).outerWidth();
    var cols=Math.floor($(window).width() / w );
    $('#main').width(w*cols).css('margin','0 auto');
    var hArr=[];
    $boxs.each(function (index,value) {
        var h=$boxs.eq(index).outerHeight();
        if(index < cols){
            hArr.push(h);
        }else {
            var minH=Math.min.apply(null, hArr);
            var minIndex= $.inArray(minH , hArr);
            $(value).css(
                {
                    'position' : 'absolute',
                    'top' : minH+'px' ,
                    'left':minIndex*w + 'px'
                }
            )
            hArr[minIndex]+=$boxs.eq(index).outerHeight();
        }
    })
};
function  checkScrollSlide() {
    var lastBox=$('#main div:last-child');
    var lastBoxDist=lastBox.offset().top + Math.floor(lastBox.outerHeight() / 2);
    var scrollTop=$(window).scrollTop();
    var document=$(window).height();
    return (lastBoxDist < scrollTop + document ? true : false);
}