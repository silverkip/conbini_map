var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: {lat: 35.6938, lng: 139.7034},
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
  map.data.loadGeoJson('static/geojson/shibuya-meguro-setagaya.geojson')
  map.data.loadGeoJson('static/geojson/05-bunkyo.geojson')
  map.data.loadGeoJson('static/geojson/01-chiyoda.geojson')
  map.data.loadGeoJson('static/geojson/01-13.geojson')
  map.data.loadGeoJson('static/geojson/15-23.geojson')
  map.data.loadGeoJson('static/geojson/14-nakano.geojson')

  map.data.setStyle(function(feature) { 
    return {
      icon : {
        path : google.maps.SymbolPath.CIRCLE,
        scale : 2,
        fillColor : 'red',
        fillOpacity : 1,
        strokeWeight : 0,
      }
    }
  });

  drawNut();

    // make this into polygon with all of the points iterated inside later
/*   map.data.setStyle(function(feature) { 
    var geo = feature.getGeometry();
    if(geo.getType().toLowerCase() == 'point'){
      feature.circle = new google.maps.Circle({
      path : google.maps.SymbolPath.CIRCLE,
      map : map,
      center : geo.get(),
      radius: 10,
      fillColor : 'green',
      fillOpacity : 1,
      strokeWeight : 0,
      strokeColor : 'green'
      });
    };
    return {visible:false};
  }); */
}

/* function getCircle(magnitude) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: 100,
    strokeColor: 'green',
    strokeWeight: 10,
    strokeOpacity : 1
  };
}
 */
function drawCircle(point, radius, dir) //radius in km
{ 
    var d2r = Math.PI / 180;   // degrees to radians 
    var r2d = 180 / Math.PI;   // radians to degrees 
    var earthsradius = 6378; // 3963 is the radius of the earth in miles, 6371 in km
    var points = 32; 

    // find the raidus in lat/lon 
    var rlat = (radius / earthsradius) * r2d; 
    var rlng = rlat / Math.cos(point.lat() * d2r); 

    var extp = new Array(); 
    if (dir==1) {var start=0;var end=points+1} // one extra here makes sure we connect the
    else{var start=points+1;var end=0}
    for (var i=start; (dir==1 ? i < end : i > end); i=i+dir)  
    {
        var theta = Math.PI * (i / (points/2)); 
        ey = point.lng() + (rlng * Math.cos(theta)); // center a + radius x * cos(theta) 
        ex = point.lat() + (rlat * Math.sin(theta)); // center b + radius y * sin(theta) 
        extp.push(new google.maps.LatLng(ex, ey));
    }
    return extp;
}

function drawNut() {
  var paths = [];
  var direction = 1;

  map.data.forEach(function(feature) {
    var center = feature.getGeometry().get();
    paths.push(drawCircle(center, 0.4, direction));
  });

  var nut = new google.maps.Polygon({
    paths : paths,
    fillColor: 'green',
    fillOpacity: 0.35,
    strokeWeight: 0,
    strokeColor: 'green',
    strokeOpacity: 0.8
  });
  nut.setMap(map);
}

function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}

$(document).ready(
  function(){
    initMap();
  }
)