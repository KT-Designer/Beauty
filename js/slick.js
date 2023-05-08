$('.autoplay').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 700,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});