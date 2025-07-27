$(document).ready(function () {
  $(".banner-carousel").owlCarousel({
    rtl: false,
    loop: true,
    margin: 10,
    autoplay: true,
    nav: false,
    dots: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    freeDrag: false,
    pullDrag: false,
    touchDrag: false,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  $(".services").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    margin: 50,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  const yearDifference = () => {
    var yearSince = new Date(Date.now()); // miliseconds from epoch
    return Math.abs(yearSince.getUTCFullYear() - 2005);
  };
  $("#date").text(new Date(Date.now()).getFullYear());
  $("#year-since").text(yearDifference());

  $(".owl-carousel").on("changed.owl.carousel", function (event) {
    var item1 = event.item.index - 2; // Position of the current item
    $(".animate__animated").removeClass("animate__fadeInUp");
    $(".owl-item")
      .not(".cloned")
      .eq(item1)
      .find(".animate__animated")
      .addClass("animate__fadeInUp");
  });

  var image = document.getElementsByClassName("thumbnail");
  new simpleParallax(image);

  if ($(window).width() > 992) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > $(".header").height()) {
        $(".sticky-nav").addClass("fixed-top");
        $("body").css("padding-top", $(".navbar").outerHeight() + "px");
      } else {
        $(".sticky-nav").removeClass("fixed-top");
        $("body").css("padding-top", "0");
      }
    });
  }
});
