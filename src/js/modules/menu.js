module.exports = function() {

  // begin menu

  $('.burger input').on('click', function () {
    $('.aside-wrap').toggleClass('active');
  });

  $('.aside-menu a').on('click', function () {
    $('.aside-wrap').toggleClass('active');
  });

  // end menu

};