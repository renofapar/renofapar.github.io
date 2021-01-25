"use strict";

document.addEventListener('DOMContentLoaded', function () {
  $('.slick-carousel').slick({
    dots: true,
    arrows: true,
    //  adaptiveHeight: true,
    slidesToShow: 1,
    speed: 500,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 10000,
    centerMode: false,
    fade: true,
    responsive: [{
      breakpoint: 768,
      setting: {
        slidesToShow: 1
      }
    }],
    mobileFirst: true
  });
  $(".header-center a, .top-scroll").mPageScroll2id();
});