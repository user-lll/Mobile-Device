var but = document.querySelectorAll('.bottom span')
var video = document.querySelector('video')
var round = document.querySelector('.round')
but[0].addEventListener('click', function () {
    video.style.display = "block";
    round.style.display = "none";
})
but[1].addEventListener('click', function () {
    video.style.display = "none";
    round.style.display = "block";
})

var left = 1;
var li = round.firstElementChild.cloneNode(true);
var li2 = round.lastElementChild.cloneNode(true);
var w1;
round.appendChild(li);
round.insertBefore(li2, round.firstElementChild);
round.style.width = round.children.length * round.children[0].offsetWidth / size + 0.1 + 'rem';
round.style.left = -round.children[0].offsetWidth / size + 'rem';
round.addEventListener('touchstart', function (e) {
    w1 = e.touches[0].pageX;
})
round.addEventListener("touchend", function (e) {
    round.style.transition = "1s";
    var w = e.changedTouches[0].pageX - w1;
    if (w < 0) {
        left++;
        this.ontransitionend = function () {
            if (left >= round.children.length - 1) {
                round.style.transition = "";
                left = 1;
                round.style.left = - round.children[0].offsetWidth / size + 'rem';
            }
        }

    } else {
        left--;
        this.ontransitionend = function () {
            if (left <= 0) {
                round.style.transition = ""
                left = round.children.length - 2;
                round.style.left = - (round.children[0].offsetWidth * 4) / size + 'rem';
            }
        }
    }
    this.style.left = - (round.children[0].offsetWidth * left) / size + 'rem';
})


var click = document.querySelectorAll('.click')
var msp = document.querySelectorAll('.mui span')
for (var s = 0; s < msp.length; s++) {
    msp[s].setAttribute('index', s);
    msp[s].addEventListener("click", function () {
        var index = this.getAttribute('index');
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        if (top < getPos(click[index]).top) {
            var timer = setInterval(function () {
                top += 10;
                if (document.documentElement.scrollTop >= getPos(click[index]).top) {
                    clearInterval(timer)
                    return false;
                }
                document.documentElement.scrollTop = top;
            }, 20)
        } else {
            var timer = setInterval(function () {
                top -= 10;
                if (document.documentElement.scrollTop <= getPos(click[index]).top) {
                    clearInterval(timer)
                    return false;
                }
                document.documentElement.scrollTop = top;
            }, 10)
        }
    })
}

var mui = document.querySelector('.mui');
var title = document.querySelector('.title')
document.body.onscroll = function () {
    if (document.documentElement.scrollTop >= getPos(title).top) {
        mui.style.transition = ".6s"
        mui.style.opacity = 1;
        mui.style.height = "0.44rem";
    } else {
        mui.style.transition = ".6s"
        mui.style.opacity = 0;
        mui.style.height = 0;
    }

    for (let s = 0; s < click.length; s++) {
        if (document.documentElement.scrollTop >= getPos(click[s]).top - click[s].offsetHeight) {
            for (let k = 0; k < msp.length; k++) {
                msp[k].style.color = ""
            }
            msp[s].style.color = "red";
        }
    }

}

var a = document.querySelectorAll('footer a')[3];
var shade = document.querySelector('.shade');
var box = document.querySelector('.shade-box');
var footer = document.querySelector('footer');
a.addEventListener('click', function () {
    box.style.transition = ".4s"
    shade.style.transition = ".6s .5s"
    box.style.transform = "scale(1)"
    shade.style.height = "88%";
})

var input = document.querySelector(".input")
input.addEventListener("click", function () {
    box.style.transform = "translateY(100%)"
})

var lis = document.querySelectorAll("ul.shade-list li")
var p = document.querySelectorAll('.header-content p')
var img = document.querySelector(".header img")
var psp = document.querySelectorAll(".p span");
var rul = document.querySelectorAll('div.shade-list span');
var nub = document.querySelectorAll(".number div span");
var obj = "";
for (var r = 0; r < lis.length; r++) {
    lis[r].addEventListener("click", function () {
        for (var r = 0; r < lis.length; r++) {
            lis[r].style.borderColor = ''
        }
        this.style.borderColor = 'red';
        obj = this.children[1].getAttribute("price");
        var sum = nub[1].innerText;
        var tariff = obj * sum;
        p[0].innerText = "￥" + tariff;
        p[1].innerText = "库存" + this.children[1].getAttribute("num") + '件'
        img.src = this.children[0].src;
        psp[0].innerText = "已选择" + this.children[1].innerText;
    })
}
for (var u = 0; u < rul.length; u++) {
    rul[u].addEventListener("click", function () {
        for (var u = 0; u < rul.length; u++) {
            rul[u].style.borderColor = ''
        }
        this.style.borderColor = 'red';
        psp[1].innerText = this.innerText;
    })
}

var n = 1;
nub[2].addEventListener("click", function () {
    n++;
    nub[1].innerText = n;
    var sum = nub[1].innerText;
    var tariff = obj * sum;
    p[0].innerText = "￥" + tariff;
})
nub[0].addEventListener("click", function () {
    n--;
    if (n < 1) {
        n = 1;
    }
    nub[1].innerText = n;
    var sum = nub[1].innerText;
    var tariff = obj * sum;
    p[0].innerText = "￥" + tariff;
})



