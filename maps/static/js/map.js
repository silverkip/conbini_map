var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 35.652832, lng: 139.839478},
    mapTypeId: 'roadmap'
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

  // make this into polygon with all of the points iterated inside later
  map.data.setStyle(function(feature) { 
    var geo = feature.getGeometry();
    if(geo.getType().toLowerCase() == 'point'){
      feature.circle = new google.maps.Circle({
      map : map,
      center : geo.get(),
      radius : 400,
      fillColor : 'green',
      fillOpacity : 0.2,
      strokeWeight : 0,
      strokeColor : 'green'
      });
    };
    return {visible:false};
  });
}

function getCircle(magnitude) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: 100,
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