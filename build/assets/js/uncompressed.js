//====== Begin language switcher ======
$('.aside-lang__item').on('click', function () {
  var lang = $(this).data('lang');
  $('.aside-lang__item').removeClass('active');
  $(this).addClass('active');
  $('#aside-lang__text').text(lang);
});
//====== End language switcher ======


//====== Begin popup ======
$(window).on('load', function () {
  $('.popup__layer').delay(10000).fadeIn();
});
$('.popup__close').on('click',function () {
  $('.popup__layer').fadeOut();
});
//====== End popup ======


//====== Begin projects popup ======
$('.projects__item').on('click', function () {
  var popupNum = $(this).data('project');
  $('.projects-popup__layer').fadeIn();
  $('.projects-popup--' + popupNum).fadeIn();
});
$('.popup__close').on('click',function () {
  $('.projects-popup__layer, .projects-popup').fadeOut();
});
//====== End projects popup ======


//====== Begin Barba ======
  Barba.Pjax.start();
  //=============
  //begin плавные переходы по страницам
  //=============
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
  //=============
  //end плавные переходы по страницам
  //=============


  Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
    var currPage = container.id;

    //============= begin about ==============
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
    }
    //============= end about ==============

    //============= begin projects ==============
    else if (currPage === 'projects') {
      //====== Begin projects popup ======
      $('.projects__item').on('click', function () {
        var popupNum = $(this).data('project');
        $('.projects-popup__layer').fadeIn();
        $('.projects-popup--' + popupNum).fadeIn();
      });
      $('.popup__close').on('click',function () {
        $('.projects-popup__layer, .projects-popup').fadeOut();
      });
      //====== End projects popup ======


      var coords = [
        //russia
        [64.207355, 91.777372]
      ];

      var markers = [
        //01
        [55.81145, 37.62272, 'Месторождения золота МКАД'],
        //02
        [60.060030, 65.742541, 'Месторождения золота Забайкальского края'],
        //03
        [58.183126, 104.519520, 'Месторождения золота Забайкальского края'],
        //04
        [66.926374, 128.977237, 'Месторождения золота Забайкальского края']
      ];

      var map = {};

      var isDraggable = $(document).width() > 700 ? true : false;

      function initialize() {
        var mapDiv = document.getElementById("projects-map");

        map = new google.maps.Map(mapDiv, {
          zoom: 3,
          disableDefaultUI: false,
          scrollwheel: false,
          draggable: isDraggable,
          center: new google.maps.LatLng(coords[0][0], coords[0][1]),
          styles: [{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#ff0000"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2f8c83"},{"visibility":"on"}]}]
        });

        var image = "assets/img/marker.png";
        var bubbleWrapStart = '<div class="map_bubble" style="display:block;max-width:180px;text-align:center;font-size:12px;color:#323232;">';
        var bubbleWrapEnd = "</div>";

        $.each(markers, function(index, val) {
          var myLatLng = new google.maps.LatLng(val[0], val[1]);
          var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            title: val[2]
          });

          var infowindow = new google.maps.InfoWindow({
            content: bubbleWrapStart + val[2] + bubbleWrapEnd
          });

          marker.addListener("mouseover", function() {
            infowindow.open(map, marker);
          });

          marker.addListener("click", function() {
            infowindow.open(map, marker);
            map.panTo(this.getPosition());
            map.setZoom(16);
          });

        });
      }
      // google.maps.event.addDomListener(window, "load", initialize);
      initialize();

    }
    //============= end projects ==============

    //============= begin contacts ==============
    else if (currPage === 'contacts') {
      function initMap() {
        var centerLatLng = new google.maps.LatLng(59.949137, 30.278076);
        var mapOptions = {
          center: centerLatLng,
          zoom: 16,               // Зум по умолчанию. Возможные значения от 0 до 21
          styles: [{"featureType":"administrative","elementType":"all","stylers":[{"hue":"#ff0000"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2f8c83"},{"visibility":"on"}]}]
        };
        var map = new google.maps.Map(document.getElementById("contacts-map"), mapOptions);

        var marker = new google.maps.Marker({
          position: {lat: 59.949137, lng: 30.278076},
          map: map,
          icon: "assets/img/marker.png"
        });

      }
      initMap();
    }
    //============= end contacts ==============

    //============= begin service ==============
    else if (currPage === 'service') {
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
    //============= end service ==============

  });
//====== End Barba ======



//====== Begin Programmer code ======






