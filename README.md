# waterFall & Version 1 :
###  `未使用ajax 使用假数据来模拟 · 瀑布流布局实践 --数据块的布局和加载`        

### *基本思路*：
##### 1.页面布局: ` div.box>div.pic>img `
            1. 确定每张图片的宽度，数据块向左浮动
            2. 使用js确定窗口列数，计算每列的高度，每行溢出的数据块根据前一列中最小高度的数据块进行自上而下填充
            3. js判断滚动加载，和加载的动作
#####  2.存在的问题：
             1.ajax请求
             2.dom节点不断增多会引发哪些问题
#####  3.  *something*
 >           _css3:
 >           _html5:
 
 ```
 x+=1
 not x++
 ```
