var locations = [ "pirate ship", "laundry room", "elevator","art gallery", "playground", "helicopter", "deep in a cave", "marathon finish line", "wine tasting", "island nation", "classroom", "dentist's office", "sea cave", "Diner", "Beach House", "Space Station", "Log Cabin", "Luxury Cruise", "Airport", "An Igloo", "Barbershop", "The Great Wall of China", "Coca Cola Factory","Chipotle","The North Pole"];
var $mainContent = $('.main-content');
var $button = $('.button')

var players = parseInt(prompt("How many players?"));
var locationArray = getLocationArray();
var counter = -1;

function showLocation(){
	counter++;
	return locationArray[counter];
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getLocationArray() {

	var locationIndex = Math.floor(Math.random()*locations.length);
	var location = locations[locationIndex];
	var locationArray = ["You're the spy!"]

	for (var i = 0; i < players - 1; i++) {
		locationArray.push(location)
	};

	locations.splice(locationIndex, 1);

	shuffle(locationArray);
	return locationArray;
}

$("#begin").click(function(){
	var text = 'A location has been chosen. ';
	var buttonText = '<button id="show">Show</button>';
	text += 'Only ';
	text += players - 1;
	text += ' of you are innocent... ';
	text += 'find the spy!';
	
	$mainContent.html(text);
	$button.html(buttonText);

	});

$("body").on('click', '#show', function(){

	var text = showLocation();
	var buttonText = '<button id="hide">Hide</button>';
	text += ' ' + (counter + 1) + "/" + players;


	$mainContent.html(text);
	$button.html(buttonText);

	});

$("body").on('click', '#hide', function(){

	if (counter === players - 1){
		var text = '<p>Find the spy!</p>';
		var buttonText = '<p><button id="restart">Restart</button></p>';
	} else {
		var text = "";
		var buttonText ='<button id="show">Show</button>';
	}
	
	$mainContent.html(text);
	$button.html(buttonText);
});

$("body").on('click', '#restart', function(){
	locationArray = getLocationArray();
	counter = -1;
	var text = 'A location has been chosen. ';
	var buttonText = '<button id="show">Show</button>';
	text += 'Only ';
	text += players - 1;
	text += ' of you are innocent... ';
	text += 'find the spy!';

	$mainContent.html(text);
	$button.html(buttonText);
});
