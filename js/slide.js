//메인
$(function(){
  $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true,
      arrows:false,
      dots:true,
      autoplay:true
    });
})

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

//양한방 프로그램 슬릭
$(function(){
  $("#sec4_prog1 .slider-for ").slick({
    lazyLoad: 'ondemand',
    infinite: true, 
    arrows : true,
    asNavFor: '#sec4_prog1  .slider-nav'
  }); 
  $("#sec4_prog1  .slider-nav").slick({
    lazyLoad: 'ondemand', 
    infinite: true, 
    arrows : false,
    fade: true,
    asNavFor: '#sec4_prog1  .slider-for'
  }); 
})
//-----------------재활--------------------- 
$(function(){
  $(".sec5_slider").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true,
      arrows:false,
      dots:true,
      autoplay:true
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

//퀵버튼-상담예약 팝업창
$(function(){
  $('#call_quick .main').click(function(){
    $('.call_box').show()
  });
  // $('.modal').click(function(){
  //   $('#pop_up').fadeIn(600);
  //   winOpen()
  // })
})