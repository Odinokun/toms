module.exports = function() {

  // begin Barba
  Barba.Pjax.start();
  // $('.aside-menu a').on('click', Barba.Pjax.start());

  //begin плавные переходы по страницам
  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },

    fadeIn: function() {
      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility : 'visible',
        opacity : 0
      });

      $el.animate({ opacity: 1 }, 400, function() {
        _this.done();
      });
    }
  });

  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  };
  //end плавные переходы по страницам


  Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
    var currPage = container.id;
    console.log(currPage);

    if (currPage === 'about') {
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

    } else if (currPage === 'contacts') {

      // initMap() - функция инициализации карты
      function initMap() {
        // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
        var centerLatLng = new google.maps.LatLng(59.949137, 30.278076);
        // Обязательные опции с которыми будет проинициализированна карта
        var mapOptions = {
          center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
          zoom: 16,               // Зум по умолчанию. Возможные значения от 0 до 21
          styles: [{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#ff0000"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2f8c83"},{"visibility":"on"}]}]
        };
        // Создаем карту внутри элемента #map
        var map = new google.maps.Map(document.getElementById("contacts-map"), mapOptions);
      }
      // запускаем initMap()
      initMap();

    } else if (currPage === 'service') {
      console.log('service');
      // begin scroll 2 ancore desktop menu
      $(function() {
        $('a.service-tab__item[href*=\\#]').on("click", function(e){
          e.preventDefault();
          var anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 80 + 'px'
          }, 1000);
        });
        return false;
      });
      // end scroll 2 ancore desktop menu

      // ===== Scroll to Top ====
      $(window).on('scroll', function() {
        if ($(this).scrollTop() <= 50) {
          $('#scroll2top').fadeOut();
        } else {
          $('#scroll2top').fadeIn();
        }
      });
      $('#scroll2top').click(function() {
        $('body,html').animate({
          scrollTop : 0
        }, 500);
      });
      // ===== End Scroll to Top ====

    }
  });
  // end Barba

};
