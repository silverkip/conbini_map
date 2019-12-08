var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
//    center: {lat: 35.6938, lng: 139.7034},
    center: {lat: 35.723563, lng:139.750436}, // hakusan
    mapTypeId: 'roadmap',
    styles : [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ]
  });

  var hakusan = {lat: 35.723563, lng:139.750436};

  var mark = new google.maps.Marker({
    icon : {
      url: "http://maps.google.com/mapfiles/ms/icons/red.png",
      scaledSize: new google.maps.Size(48,48),
      labelOrigin: new google.maps.Point(24, -12)
    },
    position : hakusan,
    map : map,
    label: {
      text: "白山キャンパス",
      fontSize: "16px",
      fontWeight: "bold",
      fontFamily: 'Meiryo',
    }
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
        scale : 4,
        fillColor : 'red',
        fillOpacity : 0.5,
        strokeWeight : 0,
      }
    }
  });
//  map.data.setStyle({visible: false});

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

function drawNut(radius) { //radius in meter
  var paths = [];
  var direction = 1;
//  var radius = parseInt(document.getElementById("radius").textContent);

  map.data.forEach(function(feature) {
    var center = feature.getGeometry().get();
    paths.push(drawCircle(center, radius * 0.001 , direction));
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