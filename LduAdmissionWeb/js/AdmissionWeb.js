$(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 40) { // 滚动条距顶部距离（超出页面的高度）
            $(".logo-navbar").removeClass("changepadding").addClass("fixedheader");
        } else {
            $(".logo-navbar").removeClass("fixedheader").addClass("changepadding");
        }
    });
});
//------------------------------------------------ 
$(function() {
    //第一张显示
    $(".picture li").eq(0).show();
    var num = $(".picture li").length;
    //自动轮播
    var i = 0;
    var timer = setInterval(play, 2000);
    $("#posbottom li").click(function() {
        var pos_this = $(this);
        i = pos_this.index(); //自动轮播是点的后一个
        pos_this.addClass('on').siblings().removeClass("on");
        $(".picture li").eq(i).fadeIn(500).siblings().fadeOut(500);
    });
    //向右切换
    function play() {
        i++;
        i = i > num - 1 ? 0 : i;
        $("#posbottom li").eq(i).addClass('on').siblings().removeClass("on");
        $(".picture li").eq(i).fadeIn(500).siblings().fadeOut(500);
    };
    //鼠标移入移除效果
    $("#banner").hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(play, 2000);
    });
});
//------------------------------------------------------------------------------------------------
$(function() {
    //第一张显示
    $(".pic li").eq(0).show();
    var num = $(".pic li").length;
    //自动轮播
    var i = 0;
    var timer = setInterval(play, 2000);
    $("#position li").hover(function() {
        var pos_this = $(this);
        i = pos_this.index(); //自动轮播是点的后一个
        pos_this.addClass('cur').siblings().removeClass("cur");
        $(".pic li").eq(i).show().siblings().hide();
    });
    //向右切换
    function play() {
        i++;
        i = i > num - 1 ? 0 : i;
        $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
        $(".pic li").eq(i).show().siblings().hide();
    };
    //鼠标移入移除效果
    $("#container").hover(function() {
        clearInterval(timer);
    }, function() {
        timer = setInterval(play, 2000);
    });
});
