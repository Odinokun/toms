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