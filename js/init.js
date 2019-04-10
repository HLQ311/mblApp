let currClientWidth, fontValue,originWidth;
//originWidth用来设置设计稿原型的屏幕宽度（这里是以 Iphone 6为原型的设计稿）
originWidth=375;
__resize();

//注册 resize事件
window.addEventListener('resize', __resize, false);

function __resize() {
    currClientWidth = document.documentElement.clientWidth;
    //这里是设置屏幕的最大和最小值时候给一个默认值
    if (currClientWidth > 640) currClientWidth = 640;
    if (currClientWidth < 320) currClientWidth = 320;
    //
    fontValue = ((625 * currClientWidth) /originWidth).toFixed(2); // 设了625%后就有1rem = 100px
    document.documentElement.style.fontSize = fontValue + '%';
}

function isIPhoneXFn(){
    const u = navigator.userAgent;
    const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isIOS) {
        return screen.height === 812 && screen.width === 375
    }
    return false
}

var isIPhoneX = isIPhoneXFn()
