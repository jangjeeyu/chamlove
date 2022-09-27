//언어버튼
$(function(){
    $('.lang').click(function(){
      $('.div1').slideToggle();
    })
  
  // 네비 버튼
  $('.m_sub').hide();
  $('.close1').click(function(){
       $('.burg_nav').animate({right:'-100%'});
     });
  $('.burg_btn > img').click(function(){
      $('.burg_nav').animate({right:'0'});
     })
  $('#btn1>li').each(function(){
    var depth1_a = $(this).children('a');
    var depth2_sub = $(this).children('.m_sub');
    var sub_status = 0; /*0--닫힘 1--열림*/
    depth1_a.click(function(){ 
      $('.m_sub').hide();
      depth2_sub.toggle();

          /*
      if(sub_status == 0){
        $('.m_sub').hide();
        $('#btn1>li>a').removeClass('active');

        depth2_sub.show();
        $(this).addClass('active');
        sub_status = 1;
      }else {
        depth2_sub.hide();
        $(this).removeClass('active');
        sub_status = 0;
      }  */


    })  //depth1_a.click


   

  })   //  $('#btn1>li').each

//탑버튼
    $(".top").click(function(){
        $('html, body').animate({
        scrollTop : 0
        }, 800);
        return false;
        });

//상담 팝업
  $('.call_box .close').click(function(){
    $('.call_box').fadeOut(400)
  });
  $('.main').click(function(){
    $('.call_box').fadeIn(400);
  })

})
  