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
  // After Image
  $(".ab-img").after('<div class="ab-img-after" />');
});
