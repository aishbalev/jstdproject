function mysubmit() {
	document.getElementById("outbox").innerHTML = 'yoooou';
}

var mapDiv;
var map;


function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat:52.52, lng: 13.405},
		zoom: 9
	});
	var dataLayer = new google.maps.KmlLayer({
		src: 'TRAIN LOCATIONS.kml',
		map: map
	});
/*	var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 41.876, lng: -87.624}
  });

  var ctaLayer = new google.maps.KmlLayer({
    url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
    map: map
  });*/
}

function Enter() {
	if (event.keyCode == 13) {
		document.getElementById("searchbutton").click();
	}
}

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function pageSearch() {
	//grab the input
	var input = document.getElementById('inbox');
  // Create the search box and link it to the UI element.
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}