
    var productButton = document.getElementById('product-list-button');
    var productList = document.getElementById('product-list');

    productButton.addEventListener('mouseenter', function () {
        productList.style.height = "276px";
    });

    productList.addEventListener('mouseenter', function () {
        productList.style.height = "276px";
    });

    productButton.addEventListener('mouseleave', function () {
        productList.style.height = "0px";
    });

    productList.addEventListener('mouseleave', function () {
        productList.style.height = "0px";
    });



;(function () {
    function GetRect (element) {
      var rect = element.getBoundingClientRect() // 距离视窗的距离
      var top = document.documentElement.clientTop ? document.documentElement.clientTop : 0 // html元素对象的上边框的宽度
      var left = document.documentElement.clientLeft ? document.documentElement.clientLeft : 0
      return {
        top: rect.top - top,
        bottom: rect.bottom - top,
        left: rect.left - left,
        right: rect.right - left
      }
    }
    var $box = document.getElementById('top')

    var $bottomList = document.getElementById('public-footer')
    var viewTop = document.getElementById('view-go-to-top')
    var redTop = document.getElementById('go-to-top-red')

    var divH = $box.offsetHeight // div高度
    var windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight // 浏览器高度兼容写法
    window.onscroll = function () {
      var obj = GetRect($box)

      var obj2 = GetRect($bottomList)
 
      if ((obj.top > 0 && obj.top < windowH && obj.bottom > 0 && obj.bottom < windowH)) { // 正在视口中

        this.console.log('处于页面头部, 不显示悬浮top按钮')

        redTop["style"] = "display: none";
        viewTop["style"] = "display: none";
      } else if((obj2.top > 0 && obj2.top < windowH && obj2.bottom > 0 && obj2.bottom < windowH) || (obj2.top < windowH && obj2.bottom >= windowH)) {

        this.console.log('处于页面底部, 不显示悬浮top按钮, 但显示下部固定top按钮')

        redTop["style"] = "display: block";
        viewTop["style"] = "display: none";

      } else {

        this.console.log('处于页面中央, 显示悬浮top按钮')

        redTop["style"] = "display: none";
        viewTop["style"] = "display: block";

      }

    //   if (!(obj.top > 0 && obj.top < windowH && obj.bottom > 0 && obj.bottom < windowH)) { // 离开了视口
    //     console.log('离开了视口')

    //     viewTop.className = 'view-go-to-top-on'
    //   }

    //   if (!(obj2.top > 0 && obj2.top < windowH && obj2.bottom > 0 && obj2.bottom < windowH)) { // 离开了视口
    //     console.log('bottom离开了视口')

    //     viewTop.className = 'view-go-to-top-on'
    //   }

    }
  })();