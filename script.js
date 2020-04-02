var myMap;

function initMap() {

	var mapOptions = {
		center: {
			lat: 52.067514882683064, 
			lng: 4.3238686164587
		},
		zoom: 15,
	};

	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);

	var hhsMarker = new google.maps.Marker({
		position: {
			lat: 52.0673,
			lng: 4.3241,
		},
		map: myMap,
		title: 'de Haagse Hogeschool'
	});

}
