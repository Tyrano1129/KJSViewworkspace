$('.testimonial-heading .list').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('#btn-top').on("click",
  function (e) {
    $.scrollTo(0, 600);
  }
);
$(window).scroll(
  function () {
    // 화면의 위쪽으로 기준으로 값을 가져오는 애 50보다 크다 => 스크롤을 조금이라도 내렸다.
    if ($(this).scrollTop() > 50) {
      $('header').addClass('active');
    } else {
      // 가장위인 상태
      $('header').removeClass('active');
    }
  }
);