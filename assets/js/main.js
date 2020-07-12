$(function () {
  // Activate slider
  let slider = tns({
    container: ".my-slider",
    items: 1,
    speed: 1000,
    slideBy: "page",
    autoplay: false,
    autoplayButtonOutput: false,
    loop: true,
    mouseDrag: true,
    responsive: {
      768: {
        disable: true,
      },
    },
    controls: false,
    // controlsContainer: ".my-slider-controls",
  });
  $("#my-mobile-nav").on("show.bs.collapse", function () {
    $("#my-mobile-nav").removeClass("collapsing");
    $("#my-mobile-nav").addClass("visi");
  });
  // Active section
  (() => {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 200) {
        $("nav.navbar")
          .removeClass("position-absolute")
          .removeClass("mt-2")
          .removeClass("mt-md-4")
          .addClass("bg-black");
      } else {
        $("nav.navbar")
          .addClass("mt-2")
          .addClass("mt-md-4")
          .removeClass("bg-black");
      }
      // Says this function is preformed continuisly while scrolling.
      var Scroll = $(window).scrollTop() + 105, // This variable finds the distance you have scrolled from the top.
        SectionOneOffset = $("#section-home").offset().top - 105,
        SectionTwoOffset = $("#section-aboutme").offset().top - 105,
        SectionThreeOffset = $("#section-acheivements").offset().top - 105,
        SectionFourOffset = $("#section-songs").offset().top - 105,
        SectionFiveOffset = $("#section-latesttracks").offset().top - 105,
        SectionSixOffset = $("#section-contact").offset().top - 105;
      $("ul .nav-item").removeClass("active");
      if (Scroll >= SectionSixOffset)
        $(".menu-item-6").parent().addClass("active");
      else if (Scroll >= SectionFiveOffset)
        $(".menu-item-5").parent().addClass("active");
      else if (Scroll >= SectionFourOffset)
        $(".menu-item-4").parent().addClass("active");
      else if (Scroll >= SectionThreeOffset)
        $(".menu-item-3").parent().addClass("active");
      else if (Scroll >= SectionTwoOffset)
        $(".menu-item-2").parent().addClass("active");
      else $(".menu-item-1").parent().addClass("active");
    });
  })();
  (() => {
    var headerHeight = $("nav.navbar").outerHeight();

    $("[href]").click(function (e) {
      $(".collapse").collapse("hide");
      var targetHref = $(this).attr("href");
      if (targetHref.length <= 1) {
        return;
      }
      targetHref = "#section-" + targetHref.slice(1, targetHref.length);
      var st = 0;
      if (targetHref !== "#section-home") {
        st = $(targetHref).offset().top - headerHeight + 1;
      }
      $("html, body").animate(
        {
          scrollTop: st,
        },
        1000
      );
    });
  })();
  // After Image
  $(".ab-img").after('<div class="ab-img-after" />');
});
