$(document).ready(function(){
  //✨header
  $(".sub").hide();

  $('.main:nth-child(2), .main:nth-child(3), .main:nth-child(4)').hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".bg_box").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().slideUp(50);
    $(".bg_box").stop().slideUp();
  })

    $(".trigger").click(function(){
      $(this).toggleClass("active");
      $(".modal").slideToggle("fast");
    });
  
    

  //특정위치에 오면 메뉴색반전

  $(window).scroll(function(){
    let scrollpos=$(this).scrollTop();

    if(scrollpos>=500){
      $("header").css({"background-color":"#002646"});
      $(".gnb>.main>a").css({"color":"#fff"});
      $(".gnb>.main>a>i").css({"color":"#fff"});
      $("header nav a img").attr("src","image/logo2.png");

    }else if(scrollpos<500){
      $("header").css({"background-color":"#fff"});
      $(".gnb>.main>a").css({"color":"#002646"});
      $(".gnb>.main>a>i").css({"color":"#002646"});
      $("header nav a img").attr("src","image/logo.png");
    };
  });



  //✨index.html
  function summerTimer(){
    const summer = new Date('June 22,2024 00:00:00').getTime();
    const today = new Date().getTime();
    const countDown= summer - today;
    const countday = String(parseInt(countDown / (24 * 60 * 60 * 1000))).padStart(2,"0");
    const countdayLeft = parseInt(countDown % (24 * 60 * 60 * 1000));
    const counthour = String(parseInt(countdayLeft / (60 * 60 * 1000))).padStart(2,"0");
    const counthourLeft = parseInt(countDown % (60 * 60 * 1000));
    const countminute = String(parseInt(counthourLeft / (60 * 1000))).padStart(2,"0");
    const countminuteLeft = parseInt(counthourLeft % (60 * 1000));
    const countsecond = String(parseInt(countminuteLeft / 1000)).padStart(2, "0");

    $('.countBox.day').html(`<p>${countday}</p>`);
    $('.countBox.hour').html(`<p>${counthour}</p>`);
    $('.countBox.minute').html(`<p>${countminute}</p>`);
    $('.countBox.second').html(`<p>${countsecond}</p>`);

  
  };
  summerTimer();
  setInterval(summerTimer,1000);

  $(window).scroll(function(){
    let scrollpos=$(this).scrollTop();

    if(scrollpos>=1000){
      $(".announce h2").addClass('active');
    }
  });




  //페이드인아웃이미지
  let $img2 = $(".mainvisual ul li"),
  oldImg2 =0,
  newImg2 =0,
  count2 = $img2.length;

  function changeImg2(newImg2){
    if(oldImg2 != newImg2){
      $img2.eq(oldImg2).removeClass("imgVisible");
      $img2.eq(newImg2).addClass("imgVisible");
    };
    oldImg2 = newImg2;
  };

  function autoImg2(){
    newImg2++;
    if(newImg2>count2-1){
      newImg2=0;
    }
    changeImg2(newImg2);
  };
  timerImg2= setInterval(autoImg2,4000);




  //✨cbstory.html
  $(".storyTop").hide();
  $(".storyBottom").hide();

  $(window).scroll(function(){
    let scrollpos=$(this).scrollTop();

    if(scrollpos>=350 && scrollpos<1000){
      $(".storyTop").fadeIn('slow');
    }else if(scrollpos>=1000){
      $(".storyBottom").fadeIn('slow'); 
    };
  });


  //✨guide1.html

  $(window).scroll(function(){
    let scrollpos=$(this).scrollTop();
    if(scrollpos>=200){
      $('.parkCard1, .parkCard2, .parkCard3, .parkCard4, .parkCard5, .todayparkBottom').addClass("parkCardTrigger");
    }
  });
  


  //✨guide2.html
  //탭메뉴이벤트
  $(".tab li").click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    let result = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#"+result).addClass("active");

  });

  //스크롤이벤트
  $(window).scroll(function(){
    let scrollpos=$(this).scrollTop();
    if(scrollpos>=200){
      $('.tabmenu').addClass("tabMenuTrigger");
    }
  });
  

  //✨guide3.html
  $(window).scroll(function(){
    let scrollpos=$(this).scrollTop();
    if(scrollpos>=200){
      $('.trafficLeft, .trafficRight').addClass("trafficTrigger");
    }
  });

  //✨fee1.html
  $(window).scroll(function(){
    let scrollpos=$(this).scrollTop();
    if(scrollpos>=200 && scrollpos<600){
      $('.firstTable').addClass("costTrigger");
    }else if(scrollpos>=600 &&scrollpos<1100){
      $('.costCard:nth-of-type(2)').addClass("costTrigger");
    }else if(scrollpos>=1100 &&scrollpos<1500){
      $('.costCard:nth-of-type(3)').addClass("costTrigger");
    }else if(scrollpos>=1500 &&scrollpos<2100){
      $('.costCard:nth-of-type(4)').addClass("costTrigger");
    }
    else if(scrollpos>=2100 &&scrollpos<2500){
      $('.costCard:nth-of-type(5)').addClass("costTrigger");
    }else if(scrollpos>=2600){
      $('.rent').addClass("costTrigger");
    };
  });

  //페이드인아웃이미지
  let $img = $(".costMore ul li"),
  oldImg =0,
  newImg =0,
  count = $img.length;

  function changeImg(newImg){
    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("imgVisible");
      $img.eq(newImg).addClass("imgVisible");
    };
    oldImg = newImg;
  };

  function autoImg(){
    newImg++;
    if(newImg>count-1){
      newImg=0;
    }
    changeImg(newImg);
  };
  timerImg= setInterval(autoImg,4000);


  //✨fee2.html
  $(window).scroll(function(){
    let scrollpos=$(this).scrollTop();
    if(scrollpos>=200){
      $('.disCard').addClass("disCardTrigger");
    }
  });

  //✨notice2.html
  $(window).scroll(function(){
    let scrollpos=$(this).scrollTop();
    if(scrollpos>=200){
      $('.eventCard, .eventCard.later').addClass("eventCardTrigger");
    }
  });


  //✨notice3.html
  //focus event
  $('.FAQ .FAQ_in .search input').focusin(function(){
    $('.FAQ .search button>i').css({"color":"#0072B2"});
  });
  $('.FAQ .FAQ_in .search input').focusout(function(){
    $('.FAQ .search button>i').css({"color":"#979797"});
  });
  // console.dir($('.FAQ .FAQ_in .search input'))

  //아코디언
  $(".title").click(function(){
    $(this).siblings(".title").removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".content").stop().slideUp();//올라오는것
    $(this).next().stop().slideToggle();//next형제요소찾는거. this 밑의 형제에게 이벤트먹임

  });

  $('.titleF').click(function(){
    $(this).toggleClass("active");
    $(this).next().slideToggle(200);
  });

});