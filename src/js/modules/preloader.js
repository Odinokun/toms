module.exports = function() {

  // begin preloader

  $(window).on('load', function () {
    var preloader = $('#preloader-overlay');
    preloader.delay(1000).fadeOut('slow');
  });

  // end preloader

};