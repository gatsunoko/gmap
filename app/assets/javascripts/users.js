// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/


function gmap(markers, user, {draggable = false}){
	handler = Gmaps.build('Google');
	handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
		markers = handler.addMarkers(markers, {draggable: draggable});
		handler.getMap().setZoom(15);
		handler.getMap().setCenter(new google.maps.LatLng(user.latitude, user.longitude));
	  //add markers to original json
	  _.each(markers, function(json, index){
	    json.marker = markers[index];
	  });

	  //add dragend event to markers, triggered when you drop them
	  _.each(markers, function(json){
	    google.maps.event.addListener(json.marker.getServiceObject(), "dragend", function(event) {
	      var lat = event.latLng.lat();
	      var lng = event.latLng.lng();
	      console.log('Marker with id: ' + json.id + ' dropped hat lat: ' + lat + ' and lng: ' + lng)
	      document.getElementById("user_latitude").value = event.latLng.lat();
	      document.getElementById("user_longitude").value = event.latLng.lng();
	    });
	  });
	});
}
