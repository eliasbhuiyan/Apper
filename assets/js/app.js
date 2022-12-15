// --------> Preloader <--------
const loader = document.querySelector(".loader");
window.addEventListener("load", anyFun);

function anyFun() {
  loader.classList.add("dispear");
}


// --------> Scrool Top <--------
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".go_top").fadeIn();
    } else {
      $(".go_top").fadeOut();
    }
  });

  $(".go_top").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 1400);
  });
});

// --------> Animation <--------
AOS.init();

// --------> Banner Slider <--------
$(".banner-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  centerPadding: false,
  variableWidth: true,
  centerMode: true,
  autoplaySpeed: 3000,
  dots: true,
});

// --------> Trusted Slider <--------
$(".trusted_slide").slick({
  dots: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
  ],
});

// --------> VenoBox <--------
new VenoBox({
  selector: ".video__card",
});

// --------> CounterUP <--------
$(".about__timer-count").counterUp({ delay: 10, time: 1000 });

// --------> Customer__Slider <--------
$(".customer__slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 600,
  dots: true,
});

// --------> Interface__Slider <--------
$(".interface__slider").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  speed: 600,
  dots: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
  ],
});
