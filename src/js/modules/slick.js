module.exports = function() {

  // begin Slick slider

  $('.slick').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  //

  $('#about-sec__slider').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 501,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      }
    ]
  });
  // end Slick slider

};