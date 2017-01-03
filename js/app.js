var locations = [ 
  { name: "Airplane",
    roles: [ "1st Class Passenger",
             "Air Marshall",
             "Mechanic",
             "Coach Passenger",
             "Flight Attendant",
             "Co-Pilot",
             "Captain" ] },
  { name: "Bank",
    roles: [ "Armored Car Driver",
             "Bank Manager",
             "Loan Consultant",
             "Bank Robber",
             "Customer",
             "Security Guard",
             "Bank Teller" ] },
  { name: "Beach",
    roles: [ "Beach Bartender",
             "Kite Surfer",
             "Lifeguard",
             "Theif",
             "Beach Goer",
             "Beach Photographer",
             "Ice Cream Man" ] },
  { name: "Casino",
    roles: [ "Bartender",
             "Head of Security",
             "Bouncer",
             "Pit Boss",
             "Hustler",
             "Dealer",
             "Gambler" ] },
  { name: "Cathedral",
    roles: [ "Priest",
             "Beggar",
             "Sinner",
             "Parishioner",
             "Tourist",
             "Deacon",
             "Choir Singer" ] },
  { name: "Circus Tent",
    roles: [ "Acrobat",
             "Animal Tamer",
             "Magician",
             "Audience Member",
             "Fire Eater",
             "Clown",
             "Juggler" ] },
  { name: "Corporate Party",
    roles: [ "Entertainer",
             "Manager",
             "Party Crasher",
             "Owner/CEO",
             "Admin Assistant",
             "Accountant",
             "Delivery Boy" ] },
  { name: "Crusader Army",
    roles: [ "Monk",
             "Imprisoned Arab",
             "Servant",
             "Bishop",
             "Squire",
             "Archer",
             "Knight" ] },
  { name: "Day Spa",
    roles: [ "Customer",
             "Stylist",
             "Masseur/Masseuse",
             "Manicurist",
             "Makeup Artist",
             "Dermatologist",
             "Beautician" ] },
  { name: "Embassy",
    roles: [ "Security Guard",
             "Admin Assistant",
             "Ambassador",
             "Government Official",
             "Tourist",
             "Refugee",
             "Diplomat" ] },
  { name: "Hospital",
    roles: [ "Nurse",
             "Doctor",
             "Anesthesiologist",
             "Intern",
             "Patient",
             "Therapist",
             "Surgeon" ] },
  { name: "Hotel",
    roles: [ "Doorman",
             "Security Guard",
             "Hotel Manager",
             "Housekeeper",
             "Hotel Guest",
             "Bartender",
             "Valet" ] },
  { name: "Military Base",
    roles: [ "Deserter",
             "Colonel",
             "Medic",
             "Soldier",
             "Sniper",
             "Second in Command",
             "Tank Commander" ] },
  { name: "Movie Studio",
    roles: [ "Stuntman", 
             "Sound Engineer",
             "Cameraman",
             "Director",
             "Costume Artist",
             "Actor",
             "Producer" ] },
  { name: "Ocean Liner", 
    roles: [ "Rich Passenger",
             "Cook",
             "Captain",
             "Bartender",
             "Musician",
             "Waiter",
             "Ship's Mechanic" ] },
  { name: "Passenger Train",
    roles: [ "Mechanic",
             "Border Patrol",
             "Chef",
             "Engineer",
             "Steward",
             "Ticket Taker",
             "Passenger" ] },
  { name: "Pirate Ship",
    roles: [ "Cook",
             "Sailor",
             "Slave",
             "Cannoneer",
             "Bound Prisoner",
             "Cabin Boy",
             "Pirate Captain" ] },
  { name: "Polar Station",
    roles: [ "Medic",
             "Geologist",
             "Expedition Leader",
             "Biologist",
             "Radioman",
             "Hydrologist",
             "Meteorologist" ] },
  { name: "Police Station", 
    roles: [ "Detective",
             "Lawyer",
             "Journalist",
             "Forensic Scientist",
             "Evidence Archivist",
             "Patrol Officer",
             "Criminal" ] },
  { name: "Restaurant",
    roles: [ "Musician",
             "Customer",
             "Table Busser",
             "Host",
             "Head Chef",
             "Food Critic",
             "Server" ] },
  { name: "School", 
    roles: [ "Gym Teacher",
             "Student",
             "Principal",
             "Security Guard",
             "Janitor",
             "Lunch Lady",
             "Maintenance Man" ] },
  { name: "Car Service Station",
    roles: [ "Manager",
             "Tire Specialist",
             "Motorcyclist",
             "Car Owner",
             "Car Washer",
             "Diagnostic Tech",
             "Auto Mechanic" ] },
  { name: "Space Station", 
    roles: [ "Engineer",
             "Alien",
             "Tourist",
             "Pilot",
             "Mission Commander",
             "Scientist",
             "Doctor" ] },
  { name: "Submarine", 
    roles: [ "Cook",
             "Captain",
             "Sonar Operator",
             "Weapons Technician",
             "Sailor",
             "Radioman",
             "Navigator" ] },
  { name: "Supermarket", 
    roles: [ "Customer",
             "Cashier",
             "Butcher",
             "Janitor",
             "Produce Manager",
             "Food Sample Demo",
             "Shelf Stocker" ] },
  { name: "Theater",
    roles: [ "Coat Check",
             "Cue Card Prompter",
             "Ticket Office Cashier",
             "Theater Visitor",
             "Director",
             "Actor",
             "Crewman" ] },
  { name: "University",
    roles: [ "Graduate Student",
             "Professor",
             "Dean",
             "Psychologist",
             "Maintenance Man",
             "Student",
             "Advisor" ] }             
];

var gameState = {
  setPlayers: function(){
    this.numPlayers = parseInt($('input:radio[name=num-players]:checked').val());
    this.resetCurrentPlayer();
  },

  setLocationAndSpy: function() {
    var location = locations.pop();
        roles = helpers.shuffle(location.roles),
        tempLocationAndSpy = ["spy"];
    
    for (var i = 0; i < this.numPlayers - 1; i++) {
      role = roles.pop();
      tempLocationAndSpy.push({location: location.name, role: role});
    };

    helpers.shuffle(tempLocationAndSpy);
    this.locationAndSpy = tempLocationAndSpy;
  },

  currentLocationOrSpy: function() {
    return this.locationAndSpy[this.currentPlayer - 1];
  },

  incrementCurrentPlayer: function(){
    this.currentPlayer++;
  },

  gameOver: function(){
    return this.currentPlayer === this.numPlayers;
  },

  resetCurrentPlayer: function(){
    this.currentPlayer = 0;
  }
};

var clickHandlers = {

  init: function() {
    $('#begin').click(clickHandlers.begin);
    $button.on('click','#show', clickHandlers.show);
    $button.on('click','#hide', clickHandlers.hide);
    $button.on('click','#restart', clickHandlers.restart);
    $rules.click(clickHandlers.showRules);
  },

  begin: function() {
    gameState.setPlayers();
    gameState.setLocationAndSpy();
    $back.html(gameRenderer.begin_main_content());
    $button.html(gameRenderer.begin_button_content());
    gameRenderer.flip();
  },

  show: function() {
    gameState.incrementCurrentPlayer();
    $front.html(gameRenderer.show_main_content());
    $button.html(gameRenderer.show_button_content());
    gameRenderer.flip();
  },

  hide: function() {
    $back.html(gameRenderer.hide_main_content());
    $button.html(gameRenderer.hide_button_content());
    gameRenderer.flip();
  },

  restart: function() {
    gameState.resetCurrentPlayer();
    gameState.setLocationAndSpy();
    $back.animate({
      left: "-50"
    }, 200, function(){
      $(this).animate({
        left: "+1000"
      }, 700, function(){
        $(this).html(gameRenderer.begin_main_content());
        $(this).animate({
          left: "-1000"
        }, 0, function(){
          $(this).animate({
            left: '+50'
          }, 700, function(){
            $(this).animate({
              left: '-0'
            }, 200);
          });
        });
      });
    });
    $button.html(gameRenderer.begin_button_content());
  },

  showRules: function(event) {
    event.preventDefault();
    modal.open({content: gameRenderer.rules(), width: 900, height: 500});
  }
};

var gameRenderer = {
  begin_main_content: function(){
    var text = '<div class="main-text"><p>A location has been chosen.</p><p> Only ';
    text += gameState.numPlayers - 1;
    text += ' of you are innocent...</p><h4>Find the spy!</h4>';
    return text;  
  },

  begin_button_content: function(){
    return '<button id="show">Show</button>';
  },

  show_main_content: function() {
    var location, role, instructions;

    if (gameState.currentLocationOrSpy() === 'spy') {
      location = "<span class='bold'>Unknown Location</span>",
      role = "<span class='bold'>Spy!</span>",
      instructions = "Listen carefully to determine where you are located, and try not to give away that you don't know where you are!"
    } else {
      location = "<span class='bold'>" + gameState.currentLocationOrSpy().location + "</span>",
      role = "<span class='bold'>" + gameState.currentLocationOrSpy().role + "</span>",
      instructions = "Ask questions to determine who is the spy, but try not to give your location away!"
    }
    var text = "<div><p>You are in the: ";
    text += location;
    text += "</p><p>You are the: ";
    text += role;
    text += "</p><p>";
    text += instructions;
    text += "</p></div>";
    return text;
  },

  show_button_content: function(){
    return '<button id="hide">Hide</button>';
  },

  hide_main_content: function() {
    if (gameState.gameOver()) {
      return '<h4 class="centered">Find the spy!</h4>';
    } else {
      return "<p class='centered'>Pass the device the next player.</p>";
    }
  },

  hide_button_content: function() {
    if (gameState.gameOver()) {
      return "<button id='restart'>Restart</button>";
    } else {
      return "<button id='show'>Show</button>";
    }
  },

  flip: function() {
    $flip_container.toggleClass("flip")
  },

  rules: function() {
    text = "<h3>How to play</h3>";
    text += "<h4>Objective</h4>";
    text += "<p>The spy must avoid being found, or deduce the location.</p>";
    text += "<p>The non-spies must find and expose the spy.</p>";
    text += "<h4>Setting up a round:</h4>";
    text += "<p>First, choose 3 to 8 players and click \"begin\". Select a first player, and have them click \"show\" without letting other players see the screen. This will reveal the name of a location and a role. If the role revealed is \"Spy!\", no location is revealed. Without showing what was displayed, the current player then clicks \"hide,\" and passes the device to the player on their left. Repeat this until all players (except for the one spy) know the location. Start a timer for eight minutes and begin playing the round.</p>";
    text += "<h4>Playing a round:</h4>";
    text += "<p>Whoever saw their role last starts off the round by addressing another player by name and asking them a direct question. Any question can be asked, but they will generally be about the location. Only one question is allowed, and the other player can answer in any form, including not answering at all. Whomever was asked the question first now gets to ask a question. They can ask anyone except for the person who just asked them.</p>";
    text += "<h4>Ending a round</h4>";
    text += "<p>A round can end three different ways.<p>";
    text +="<p>1. The time runs out</p>";
    text +="<p>When the time runs out, each player gets to make an accusation, starting with the dealer. The accusser will select another player who they think is the spy. If ALL players agree (the accussed does not have to agree), then the accussed person reveals their role and the game ends. If not all players agree, the next player to the dealer's left gets to make an accusation. If a spy is never convicted in this way, then the spy wins.</p>";
    text += "<p>2. A player is convicted early</p>";
    text += "<p>Players don't have to wait until the time runs out to make an accusation. Each player may stop the clock once per round and accuse someone of being the spy. If everyone but the accused agrees, then the accused reveals their role and the game ends. NOTE: The spy can (and probably should) make an accusation in this way.</p>";
    text += "<p>3. The spy guesses the location</p>";
    text += "<p>If the round ended with a player being convicted, and that player was the spy, then the non-spies win. If that player was not the spy, then the spy wins.</p>";
    text += "<h4>Scoring</h4>";
    text += "<p>Spy Victory</p>";
    text += "<p>1. The spy gets 2 points if the time runs out and no one is accused.</p>";
    text += "<p>2. The spy gets 4 points if a non-spy is convicted.</p>";
    text += "<p>3. The spy gets 4 points if they guess the location.</p>";
    text += "<p>Non-spy victory:</p>";
    text += "<p>1. Each player gets 1 point.</p>";
    text += "<p>2. The player who initiated the successful accusation gets 2 points instead.</p>";
    text += "<h4>End of Game:</h4>";
    text += "<p>Play for as many rounds as you like (5 is recommended). Whoever has the most points once the rounds are up is the winner.</p>";

    return text;
  }
};

var helpers = {
  shuffle: function(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }   
    return array;
  }
};

var $flip_container = $('.flip-container');
var $front = $('.front');
var $back = $('.back');
var $button = $('#button-container');
var $rules = $('#rules');
clickHandlers.init();
helpers.shuffle(locations);
var modal = (function(){
  var 
  method = {},
  $overlay,
  $modal,
  $content,
  $close;

  // Append the HTML
  $overlay = $('<div id="overlay"></div>');
  $modal = $('<div id="modal"></div>');
  $content = $('<div id="content"></div>');
  $close = $('<a id="close" href="#">close</a>');

  $modal.hide();
  $overlay.hide();
  $modal.append($content, $close);

  $(document).ready(function(){
    $('body').append($overlay, $modal);
  });

  // Center the modal in the viewport
  method.center = function () {
    var top, left;

    top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
    left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

    $modal.css({
      top:top + $(window).scrollTop(), 
      left:left + $(window).scrollLeft()
    });
  };

  // Open the modal
  method.open = function (settings) {
    $content.empty().append(settings.content);

    $modal.css({
      width: settings.width || 'auto',
    })

    method.center();

    $(window).bind('resize.modal', method.center);

    $overlay.fadeIn(300);
    $modal.fadeIn(500);
  };

  // Close the modal
  method.close = function () {
    $modal.hide();
    $overlay.hide();
    $content.empty();
    $(window).unbind('resize.modal');
  };

  $close.click(function(e){
    e.preventDefault();
    method.close();
  });

  $overlay.click(function(){
    method.close();
  });

  $modal.click(function(){
    method.close();
  });

  $content.click(function(){
    method.close();
  });

  return method;
}());