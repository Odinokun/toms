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
    // console.log(currPage);

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

    } else if (currPage === 'service') {
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

    } else if (currPage === 'contacts') {
      // // initMap() - функция инициализации карты
      // function initMap() {
      //   // Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
      //   var centerLatLng = new google.maps.LatLng(20.000000, 0.000000);
      //   // Обязательные опции с которыми будет проинициализированна карта
      //   var mapOptions = {
      //     center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
      //     zoom: 3,               // Зум по умолчанию. Возможные значения от 0 до 21
      //     styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
      //   };
      //   // Создаем карту внутри элемента #map
      //   var map = new google.maps.Map(document.getElementById("contacts-map"), mapOptions);
      //
      // }
      // // запускаем initMap()
      // initMap();
    }
  });
  // end Barba

};