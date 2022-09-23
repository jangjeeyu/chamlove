//언어버튼
$(function(){
    $('.lang').click(function(){
      $('.div1').slideToggle();
    })
  })

//탑버튼
$(function(){
    $(".top").click(function(){
        $('html, body').animate({
        scrollTop : 0
        }, 800);
        return false;
        });
})

//상담 팝업
$(function(){
  $('.call_box .close').click(function(){
    $('.call_box').fadeOut(400)
  });
  $('.main').click(function(){
    $('.call_box').fadeIn(400);
  })
})

//전화 퀵버튼
  