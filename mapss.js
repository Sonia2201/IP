var map;
var btnLocation = document.getElementById("btn-location");
var myLocation = {lat:0, lng:0};

function initMap() {
  
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLocation,
    mapTypeId: 'roadmap'
  });
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      
      myLocation.lat = position.coords.latitude;
      myLocation.lng = position.coords.longitude;
      
      var marker = new google.maps.Marker({
        position: myLocation,
        map: map
      });
      map.setCenter(myLocation);
    }, function() {
      handleLocationError(true, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  console.log(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}


btnLocation.addEventListener('click', function() {
	goToMyLocation();
});

function goToMyLocation() {
  map.setCenter(myLocation);
}
