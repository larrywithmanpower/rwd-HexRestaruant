$(document).ready(function () {
    // 漢堡選單點後下拉選單出現
    $('.burger-btn').click(function (e) { 
        e.preventDefault();
        $('.burger-btn').toggleClass('open');
        $('body').toggleClass('menu-show');
        // 修正：關閉漢堡選單會順便關閉feature選單
        $('.feature').removeClass('feature-show');
    });
    // 為了使feature顯現
    $('.feature > a').click(function (e) { 
        e.preventDefault();
        $('.feature').toggleClass('feature-show');
    });
    // 參考其他人的作品https://peacethekuma.github.io/，產生出滑動錨點效果
    $("#secret-btn").on("click", function(){
        $('html, body').animate({
        scrollTop: $(".secret").offset().top
        }, 750); 
        $('.burger-btn').removeClass('open');
        $('body').removeClass('menu-show');
     });
     $("#chief-btn").on("click", function(){
        $('html, body').animate({
        scrollTop: $(".chief").offset().top
        }, 750); 
        $('.burger-btn').removeClass('open');
        $('body').removeClass('menu-show');
     });
     $("#location-btn").on("click", function(){
        $('html, body').animate({
        scrollTop: $(".location").offset().top
        }, 750); 
        $('.burger-btn').removeClass('open');
        $('body').removeClass('menu-show');
     });
});