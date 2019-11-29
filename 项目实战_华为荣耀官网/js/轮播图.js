    // 轮播图部分
    var playCon = document.getElementsByClassName("cycle-play-image-con");
    var btmBtn = document.getElementsByClassName("bottom-change-button");

    var leftBtn = document.getElementById("button-left");
    var rightBtn = document.getElementById("button-right");

    for (var i = 0; i < btmBtn.length; i++) {
        btmBtn[i].index = i;

        btmBtn[i] = function() {
            for (var j = 0; j < btmBtn.length; j++) {
                btmBtn[j].firstElementChild.style.right = "100%";
                playCon[j].style.opacity = 0;
            }
            this.firstElementChild.style.right = "0px";
            playCon[this.index].style.opacity = 1;
        }
    }    