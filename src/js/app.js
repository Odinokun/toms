$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin counter
  require('./modules/counter')();

  // begin preloader
  require('./modules/preloader')();

  // begin menu
  require('./modules/menu')();

  // begin ticker
  require('./modules/ticker')();

  // begin Animate.css
  require('./modules/waypoints')();
  require('./modules/animateCss')();

  // begin Fancybox3
  require('./modules/fancybox')();

});