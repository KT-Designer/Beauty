$('.autoplay').slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplay: true,
  autoplaySpeed: 700,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2


      }
    }
  ]
});