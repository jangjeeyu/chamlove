//간호간병 서비스 슬릭
$(function(){
    $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 1500,
        pauseOnHover : true,
      });
})

//식단안내 슬릭
$(function(){
  $(".today_meal .meal_slider").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true
  });
})

//양한방 프로그램 슬릭
$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: false,
    focusOnSelect: true
  });
      
})