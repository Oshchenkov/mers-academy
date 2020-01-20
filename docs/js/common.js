$(document).ready(function() {
  // Bootstrap popovers settings
  $(function() {
    $('[data-toggle="popover"]').popover({
      animation: true,
      trigger: "hover",
      placement: "bottom"
    });
  });

  // Carousel hero settings
  const carouselSlidesCount = $(
    "#heroCarouselWithIndex .carousel-inner"
  ).children().length;
  let carouselSlidesCurrent = $(".carousel-indicator__current");
  carouselSlidesCurrent.html("01");
  $("#heroCarouselWithIndex").on("slide.bs.carousel", function(e) {
    carouselSlidesCurrent.html("0" + (e.to + 1));
  });
  $("#heroCarouselWithIndex").carousel({
    interval: 0
  });

  $(".carousel-indicator__general").html("0" + carouselSlidesCount);
  // console.log($("#heroCarouselWithIndex .carousel-inner").children());

  // reviews carousel

  $(".owl-carousel-reviews").owlCarousel({
    margin: 30,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'><img src='https://mers-academy.ru/wp-content/themes/mers/inc/assets/images/svg/arrow_prev.svg' class='owl-carousel-reviews__nav-img'></div>",
      "<div class='nav-btn next-slide'><img src='https://mers-academy.ru/wp-content/themes/mers/inc/assets/images/svg/arrow_next.svg' class='owl-carousel-reviews__nav-img'></div>"
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });

  // news carousel
  $(".owl-carousel-news").owlCarousel({
    margin: 30,
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'><img src='https://mers-academy.ru/wp-content/themes/mers/inc/assets/images/svg/arrow_prev.svg' class='owl-carousel-news__nav-img'></div>",
      "<div class='nav-btn next-slide'><img src='https://mers-academy.ru/wp-content/themes/mers/inc/assets/images/svg/arrow_next.svg' class='owl-carousel-news__nav-img'></div>"
    ],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 3
      }
    }
  });

  // interview carousel
  $(".owl-carousel-interview").owlCarousel({
    nav: true,
    navText: [
      "<div class='nav-btn prev-slide'><img src='https://mers-academy.ru/wp-content/themes/mers/inc/assets/images/svg/arrow_prev.svg' class='owl-carousel-interview__nav-img'></div>",
      "<div class='nav-btn next-slide'><img src='https://mers-academy.ru/wp-content/themes/mers/inc/assets/images/svg/arrow_next.svg' class='owl-carousel-interview__nav-img'></div>"
    ],
    responsive: {
      0: {
        items: 1
      }
    }
  });

  //end
});
