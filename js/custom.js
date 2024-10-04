$(function () {
  const mainVisualSlide = new Swiper(".main_visual_slide", {
    parallax: true,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: "#main_visual .arrows .next",
      prevEl: "#main_visual .arrows .prev",
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },

    on: {
      slideChangeTransitionEnd: function () {
        console.log(this.realIndex);
        let num = this.realIndex;

        $("#main_slide .inner .left .txt .a")
          .eq(num)
          .addClass("on")
          .siblings()
          .removeClass("on");
      },
    },
  });

  var swiper = new Swiper(".slide_swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: "#main_slide .main_slide_arrows .next",
      prevEl: "#main_slide .main_slide_arrows .prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $("#footer .to_top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1200);
  });


  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();

    if (sct > 600) {
      $("#footer .to_top").addClass('on')
    } else {
      $("#footer .to_top").removeClass('on')
    }
  });

  $(window).on('scroll', function () {
    let sct = $(window).scrollTop();

    if (sct > 600) {
      $("#footer .chat").addClass('on')
    } else {
      $("#footer .chat").removeClass('on')
    }
  });


  $('#main_slide .list li').on('click', function () {
    let num = $(this).index();

    $(this).addClass('on').siblings().removeClass('on')

    $('#main_slide .slide_swiper').eq(num).addClass('on').siblings().removeClass('on')
  })

});
