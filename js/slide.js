//메인
$(function(){
  $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true,
      arrows:false,
      dots:true,
      autoplay:false
    });

    //간호간병 서비스 슬릭
    $(".center").slick({
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay:false,
      autoplaySpeed: 1500,
      pauseOnHover : true,
      responsive: [                   
        {  breakpoint: 800,    
               settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3
               }
          }
  ]  //반응형 포인트 지정
    });

    //양한방 프로그램 슬릭
    $("#sec4_prog1 .slider-for ").slick({
      lazyLoad: 'ondemand',
      arrows : false,
      infinite: true, 
      asNavFor: '#sec4_prog1  .slider-nav'
    }); 
    $("#sec4_prog1  .slider-nav").slick({
      lazyLoad: 'ondemand', 
      infinite: true, 
      arrows : true,
      fade: true,
      asNavFor: '#sec4_prog1  .slider-for'
    }); 

//식단안내 슬릭
$(".today_meal .meal_slider").slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true
});

//퀵버튼-상담예약 팝업창
$('#call_quick .main').click(function(){
  $('.call_box').show()
});
    // $('.modal').click(function(){
    //   $('#pop_up').fadeIn(600);
    //   winOpen()
    // })
})
