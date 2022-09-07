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
  $(".today_meal .regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
})