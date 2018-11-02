/* This is a starter with examples.  Remove the examples once you have made your own versions. */

'use strict'  
// rpg-tollbooth.js
// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;
// story function variables
var name = null;
var spin = 0;


function checkAnswers(answer) {  // Matches Scenes  - replace with yours
	if (answer == "Enter now") {
		enterKingdomOfWisdom();
	} 
	else if (answer == "Sleep on it") {
		wildNightmares();
	}
	else if (answer == "Tell mom") {
		momCantSeeIt();
	}
}

function enterKingdomOfWisdom() {
	story("Undefined");
	choices = ["Undefined"];
	answer = setOptions(choices);
}

function wildNightmares() {
	story("Undefined");
	choices = ["Undefined"];
	answer = setOptions(choices);
}

function momCantSeeIt() {
	story("Undefined");
	choices = ["Undefined"];
	answer = setOptions(choices);
}

function tollbooth(){  // FIRST SCENE - WELCOMES PLAYER
	var name = prompt("what is your name?");
	story("You see a tollbooth appear from nowhere. \
	\n On the window is a piece of paper\
	\n That says \"Enter,  " + name + ".\"\
	\n What do you do?");

	choices = ["Enter now", "Sleep on it", "Tell mom"];
	answer = setOptions(choices);
}
