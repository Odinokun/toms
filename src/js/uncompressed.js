// BEGIN Меню для навигации при разработке
//**************
// should be commented before production
//**************

$(document).ready(function ($) {
  pageWidget([
    'index',
    'inner',
    'service',
    'about'
    ]);
});

function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");
  for (var i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="'
      + pages[i]
      + '.html'
      + '">'
      + pages[i]
      + '</a></li>').appendTo('.widget_list');
  }
  var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
  widgetStilization.prependTo(".widget_wrap");
}

// END Меню для навигации при разработке


$('.burger input').on('click', function () {
  $('.aside-wrap').toggleClass('active');
});
$('.aside-menu a').on('click', function () {
  $('.aside-wrap').toggleClass('active');
});




//====== Begin Programmer code ======


// begin TICKER
var $ticker = $('[data-ticker="list"]'),
  tickerItem = '[data-ticker="item"]'
itemCount = $(tickerItem).length,
  viewportWidth = 0;
function setupViewport(){
  $ticker.find(tickerItem).clone().prependTo('[data-ticker="list"]');
  for (i = 0; i < itemCount; i ++){
    var itemWidth = $(tickerItem).eq(i).outerWidth();
    viewportWidth = viewportWidth + itemWidth;
  }
  $ticker.css('width', viewportWidth);
}

function animateTicker(){
  $ticker.animate({
    marginLeft: -viewportWidth
  }, 100000, "linear", function() {
    $ticker.css('margin-left', '0');
    animateTicker();
  });
}

function initializeTicker(){
  setupViewport();
  animateTicker();

  $ticker.on('mouseenter', function(){
    $(this).stop(true);
  }).on('mouseout', function(){
    animateTicker();
  });
}

initializeTicker();
// end TICKER



$('.aside-lang__item').on('click', function () {
  var lang = $(this).data('lang');
  $('.aside-lang__item').removeClass('active');
  $(this).addClass('active');
  $('#aside-lang__text').text(lang);
});



// counter
$(".spincrement").spincrement({
  duration: 5000
});


$('.aside-open').on('click', function () {
  $('#aside-wrap').toggleClass('active');
});