var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: -33.865427, lng: 151.196123},
    mapTypeId: 'terrain'
  });
/*
  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  // script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  script.src = 'static/geojson/05-bunkyo.geojson';

  document.getElementsByTagName('head')[0].appendChild(script);
*/
  map.data.loadGeoJson('static/geojson/05-bunkyo.geojson')

  map.data.setStyle(function(feature) {
    return {
      icon: getCircle(2)
    };
  });
}

function getCircle(magnitude) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: Math.pow(2, magnitude) / 2,
    strokeColor: 'white',
    strokeWeight: .5
  };
}

function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}

$(document).ready(
  function(){
    initMap();
  }
)