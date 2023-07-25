function initMap(){
    // Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 27.74337789447497,
			lng: 80.28365148837862,
		},
		zoom: 15,
		mapId: '7295ab02a4a5abc',
		mapTypeControl: false,
		fullscreenControl: true,
		streetViewControl: false,
	});

    // Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
     
    const markers = [
		[
			"Shashank's House",
			27.743567785688008, 
            80.28208508413442,
			'yoshi_house.svg',
			38,
			31,
		],
		[
			'You Are Here',
			27.742314397264558, 
            80.28369440385524,
			'pointer.svg',
			30,
			47.8,
		],
		[
			'Ghost House',
			27.746264477423992, 
            80.28013243044968,
			'ghosthouse.svg',
			40,
			48,
		],
		['Castle',27.739465692898722, 80.27931703887221, 'castle.svg', 40, 53],
		['Warp Pipe', 27.745428895477936, 80.2769566951084, 'pipe.svg', 38, 42.5],
		['Star World', 27.740909045758116, 80.27850164739017, 'star.svg', 38, 38],
		[
			'Donut Plains',
			27.74352982179952, 
            80.28605474752362,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			27.73787038591426, 
            80.27021898666013,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
		[
			'Donut Plains',
			27.736161102508884, 
            80.28575434016014,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
        		[
			'Donut Plains',
			27.74823946375649, 
            80.28489603333693,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}



}

