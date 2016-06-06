function mysubmit() {
	document.getElementById("outbox").innerHTML = 'yoooou';
}

var dataLayer;
var map;
var page2char = ["contents", "Tsura", "Tsura and Seraph", "Tsura, Seraph, and Alex", "Alex", "Alex", "Alex and Ruth", "Ruth", "Ruth and Elise", "Elise and Marko", "Elise and Marko", "Elise and Marko", "Elise and Marko", "Elise and Marko", "Marko and Kizzy", "Kizzy", "Kizzy",]
var page2loc = new Array(17)
page2loc[1] = "an unidentified train station"
page2loc[2] = "Meet-up near Friedrichshain Park"
page2loc[3] = "Tsura and Seraph walk to Seraph and Wolf's appartment. Alex is headed toward a small shop."
page2loc[4] = "the photographer's shop"
page2loc[5] = "the photographer's shop"
page2loc[6] = "Alex is in the photographer's shop. Ruth is at the cathedral."
page2loc[7] = "St. Hedwigs Cathedral"
page2loc[8] = "Ruth is at St. Hedwig's Cathedral.  Elise is on her way to Ruth's from Girls' League."
page2loc[9] = "Hackescher Market"
page2loc[10] = "Hackescher Market"
page2loc[11] = "Hackescher Market"
page2loc[12] = "Hackescher Market"
page2loc[13] = "Elise heads to Ruth's.  Marko is in Hackescher Market"
page2loc[14] = "Marko is heading to Duer's.  Kizzy is at Duer's."
page2loc[15] = "at Duer's"
page2loc[16] = "Kizzy leaves Duer's heading to Seraph and Wolf's"


function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat:52.52, lng: 13.405},
		zoom: 11
	});
 
}

function kinit() {
	//reinitialize the map
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat:52.52, lng: 13.405},
		zoom: 11
	});
	//add the Kizzy layer
	var dataLayer = new google.maps.KmlLayer({
		url: 'http://aishbalev.github.io/jstdproject/Kizzy.kml',
		map: map
	}); 
}

function Enter() {
	if (event.keyCode == 13) {
		pageSearch();
	}
}

function pageSearch() {
	//grab the input
	var input = document.getElementById('inbox').value;
	//reinitialize the map
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat:52.52, lng: 13.405},
		zoom: 11
	});	

	var markers = [];
	
	var marker1 = new google.maps.Marker({
		position: {lat:52.526, lng: 13.424},
		map: map,
		title: 'Barnimstraﬂe'
	});
	var infowindow1 = new google.maps.InfoWindow({
		content: "<p>Barnimstraﬂe: Elise's apartment</p><p>Identity Intersection Point: Aryan, Disabled, Jewish</p>"
	});
	marker1.addListener('click', function() {
		infowindow1.open(map, marker1);
	});

    var marker2 = new google.maps.Marker({
		position: {lat: 52.489, lng: 13.339},
		map: map,
		title: 'Bavarian Quarter - Bayerisches Viertel'
	}); 
	var infowindow2 = new google.maps.InfoWindow({
		content: "<p>Bavarian Quarter - Seraph's apartment</p><p>Identity Intersection Point: Romani, Political Dissident, Jewish</p>"
	});
	marker2.addListener('click', function() {
		infowindow2.open(map, marker2);
	});
	
	var marker3 = new google.maps.Marker({
		position: {lat: 52.503, lng: 13.381},
		map: map,
		title: 'Berlin Anhalter Bahnhof (train station)'
	});
	var infowindow3 = new google.maps.InfoWindow({
		content: 'Berlin Anhalter Bahnhof (train station)'
	});
	marker3.addListener('click', function() {
		infowindow3.open(map, marker3);
	});

    var marker4 = new google.maps.Marker({
		position: {lat: 52.527, lng: 13.378},
		map: map,
		title: 'CharitÈ Hospital'
	});
	var infowindow4 = new google.maps.InfoWindow({
		content: 'CharitÈ Hospital'
	});
	marker4.addListener('click', function() {
		infowindow4.open(map, marker4);
	});
	
	var marker5 = new google.maps.Marker({
		position: {lat: 52.491, lng: 13.40832},
		map: map,
		title: 'Fontanepromenade'
	});

    var marker6 = new google.maps.Marker({
		position: {lat: 52.515802, lng: 13.45423},
		map: map,
		title: 'Friedrichshain'
	});	
	
	var marker7 = new google.maps.Marker({
		position: {lat: 52.525579, lng: 13.398986},
		map: map,
		title: 'Groﬂe Hamburger Straﬂe'
	});
	var infowindow7 = new google.maps.InfoWindow({
		content: "<p>Groﬂe Hamburger StraﬂeJewish school and elderly care home on Hamburg Main Street; Point of detention for many of Berlin's Jew</p><p>Identity intersection point: Jewish and Romani</p>"
	});
	marker7.addListener('click', function() {
		infowindow7.open(map, marker7);
	});

    var marker8 = new google.maps.Marker({
		position: {lat: 52.492065, lng: 13.284936},
		map: map,
		title: 'Grunewald (freight yard)'
	});	
	
	var marker9 = new google.maps.Marker({
		position: {lat: 52.5231, lng: 13.402951},
		map: map,
		title: 'Hackescher Markt'
	});
	var infowindow9 = new google.maps.InfoWindow({
		content: '<h3>Hackescher Markt<h3><h3>Identity intersection point: Aryan and African</h3>'
	});
	marker9.addListener('click', function() {
		infowindow9.open(map, marker9);
	});

    var marker10 = new google.maps.Marker({
		position: {lat: 52.512842, lng: 13.430593},
		map: map,
		title: 'Lange Straﬂe'
	});	
	
	var marker11 = new google.maps.Marker({
		position: {lat: 52.503674, lng: 13.362489},
		map: map,
		title: 'L¸tzowstraﬂe'
	});

    var marker12 = new google.maps.Marker({
		position: {lat: 52.527947, lng: 13.426742},
		map: map,
		title: 'M‰rchenbrunnen'
	});	
	
	var marker13 = new google.maps.Marker({
		position: {lat: 52.55, lng: 13.55},
		map: map,
		title: 'Marzahn'
	});

    var marker14 = new google.maps.Marker({
		position: {lat: 52.529485, lng: 13.343204},
		map: map,
		title: 'Moabit'
	});
	var infowindow14 = new google.maps.InfoWindow({
		content: "<h3>Moabit: Duer's home</h3> <h3>Identity Intersection point: Romani and Homosexuality</h3>"
	});
	marker14.addListener('click', function() {
		infowindow14.open(map, marker14);
	});
  	
	var marker21 = new google.maps.Marker({
		position: {lat: 52.498054, lng: 13.337326},
		map: map,
		title: 'Motzstraﬂe and Kalckreuthstraﬂe'
	});
	var infowindow21 = new google.maps.InfoWindow({
		content: "<p>Motzstraﬂe and Kalckreuthstraﬂe: the wine cellar</p><p>Identity Intersection Point: Romani and Homosexual</p>"
	});
	marker21.addListener('click', function() {
		infowindow21.open(map, marker21);
	});

    var marker15 = new google.maps.Marker({
		position: {lat: 52.532389, lng: 13.34102},
		map: map,
		title: 'Putlitz Street Bahnhof (train station)'
	});	
	
	var marker16 = new google.maps.Marker({
		position: {lat: 52.521535, lng: 13.404927},
		map: map,
		title: 'Rosenstraﬂe'
	});
	var infowindow16 = new google.maps.InfoWindow({
		content: '<p>Rosenstraﬂe</p><p>Identity Intersection Point: Homosexual and Jewish</p>'
	});
	marker16.addListener('click', function() {
		infowindow16.open(map, marker16);
	});

    var marker17 = new google.maps.Marker({
		position: {lat: 52.540861, lng: 13.258015},
		map: map,
		title: 'Siemensstadt'
	});	
	
	var marker18 = new google.maps.Marker({
		position: {lat: 52.538413, lng: 13.413577},
		map: map,
		title: 'Sredzkistraﬂe, Schultheiss Brewery'
	});

    var marker19 = new google.maps.Marker({
		position: {lat: 52.516011, lng: 13.394161},
		map: map,
		title: 'St. Hedwigs Kathedrale'
	});	
	var infowindow19 = new google.maps.InfoWindow({
		content: "<p>St. Hedwig's Cathedral</p><p>Identity Intersection Point: Jewish and Catholic</p>"
	});
	marker19.addListener('click', function() {
		infowindow19.open(map, marker19);
	});
	
	var marker20 = new google.maps.Marker({
		position: {lat: 52.5106187, lng: 13.3689022},
		map: map,
		title: 'Tiergartenstraﬂe 4'
	});
	/*var dataLayer = new google.maps.KmlLayer({
		url: 'http://aishbalev.github.io/jstdproject/PageMap.kml',
		map: map
	});*/
	if (input.length != 0) {
		//clear away the markers
			marker1.setMap(null);
			marker2.setMap(null);
			marker3.setMap(null);
			marker4.setMap(null);
			marker5.setMap(null);
			marker6.setMap(null);
			marker7.setMap(null);
			marker8.setMap(null);
			marker9.setMap(null);
			marker10.setMap(null);
			marker11.setMap(null);
			marker12.setMap(null);
			marker13.setMap(null);
			marker14.setMap(null);
			marker15.setMap(null);
			marker16.setMap(null);
			marker17.setMap(null);
			marker18.setMap(null);
			marker19.setMap(null);
			marker20.setMap(null);
			marker21.setMap(null);
		//dataLayer.setMap(null);
		//describe the characters' locations
		var outwords = "CHARACTERS: "
		var pagechars = page2char[input];
		var moreout = "LOCATION: "
		var pagelocs = page2loc[input];
		document.getElementById("names").innerHTML = outwords.concat(pagechars);
		document.getElementById("locs").innerHTML = moreout.concat(pagelocs);
		//put in the marker
		if (input == 6 || input == 7 || input == 8){
			marker19.setMap(map);
		}
		if (input == 9 || input == 10 || input == 11 || input == 12 || input == 13 || input == 14){
			marker9.setMap(map);
		}
		if (input == 14 || input == 15 || input == 16){
			marker14.setMap(map);
		}
	}
}