// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init(38.313056, 27.141632, 'map'));
function init(lat, long, mapId) {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var myLatlng = new google.maps.LatLng(lat, long);

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,
        disableDefaultUI: true,
        scrollwheel: false,

        // The latitude and longitude to center the map (always required)

        center: myLatlng, // New York

        // How you would like to style the map.  
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{ "stylers": [{ "hue": "#C9C9C9" }, { "invert_lightness": false }, { "saturation": -100 }, { "lightness": 50 }, { "gamma": 0.5 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#C9C9C9" }] }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    
    var mapElement = document.getElementById(mapId);

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'assets/images/marker.png',
        title: 'İlmor'
    });



}
