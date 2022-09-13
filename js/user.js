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

  