// 常量定义
// 左右切换按钮
const left = "left";
const right = "right";

// 定义传入的内容, 图片为true, 按钮为false
const img = true;
const btn = false;

// 定义底部按钮的开关状态
const btnOnColor = "#cccccc";
const btnOffColor = "white";

// 定义图片的开关状态
const imgOnDisplay = 1;
const imgOffDisplay = 0;

// 定义按钮开关的行为
function btnToggleFun(operator, result) {
    operator.style.backgroundColor = result;
}

// 按钮开关函数, btnToggle(全部按钮, 想要操作的按钮下标, 开启(true)还是关闭(false))
function btnToggle(btnArr, index, bool) {
    bool ? btnArr[index].style.backgroundColor = btnOnColor : btnArr[index].style.backgroundColor = btnOffColor;
}

// 图片开关函数, imgToggle(全部图片, 想要操作的图片下标, 开启(true)还是关闭(false))
function imgToggle(imgArr, index, bool) {
    bool ? imgArr[index].style.opacity = imgOnDisplay : imgArr[index].style.opacity = imgOffDisplay;
}

// 
function next(arr, index, addOrSub) {
    if (addOrSub == null || addOrSub == false || addOrSub == "right") {
        if (index == arr.length) {
            index = 0;
        } else {
            index++;
        }
    } else {
        if (index == 0) {
            index = arr.length;
        } else {
            index--;
        }
    }
}

window.onload = function () {
    
    // 轮播图部分
    var btmBtn = this.document.querySelectorAll(".bottom-btns>li");
    var plyImg = this.document.querySelectorAll(".image-con>.image");
    this.console.log(btmBtn, plyImg);

    // 初始化按钮组, 选中第一个按钮
    btmBtn[0].style.backgroundColor = "white";
    plyImg[0].style.opacity = 1;

    for (var i = 0; i < btmBtn.length; i++) {
        btmBtn[i].index = i;
        btmBtn[i].onclick = function () {
            // for(e of btmBtn) {
            //     e.style.backgroundColor = "#cccccc";
            // }
            // this.style.backgroundColor = "white";
            // for(e of plyImg) {
            //     e.style.opacity = 0;
            // }
            // plyImg[this.index].style.opacity = 1;

        }
    }
}