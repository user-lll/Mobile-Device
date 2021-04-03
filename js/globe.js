var size = parseFloat(document.documentElement.style.fontSize);
(window.onresize = function () {
    var w = document.documentElement.getBoundingClientRect().width;
    size = w / 3.75;
    document.documentElement.style.fontSize = size + "px";
})()

window.onload = function () {
    var icon = document.querySelectorAll('footer span')
    for (f = 0; f < icon.length; f++) {
        icon[f].addEventListener('click', function () {
            for (f = 0; f < icon.length; f++) {
                icon[f].innerText = icon[f].getAttribute('font2');
            }
            this.innerText = this.getAttribute('font');
        })
    }

}


function getPos(ele) {
    // 保存绝对距离的计数器
    var l = 0;//21+21=42+8
    var t = 0;//21+21=42+8
    // 可以通过while循环来迭代分阶段求
    // 假设该元素的定位父级还在，则循环成立，直到null
    while (ele.offsetParent) {
        // 该元素到定位父级的距离+定位父级的边框
        l += ele.offsetLeft + ele.offsetParent.clientLeft;
        t += ele.offsetTop + ele.offsetParent.clientTop;
        // 将元素迭代变成元素的定位父级，再求下一段
        ele = ele.offsetParent;
    }
    // 将求得的结果返回出去
    return {
        left: l,
        top: t
    }
}