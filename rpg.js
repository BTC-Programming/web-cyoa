'use strict'
// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;
// story function variables
var name = null;
var spin = 0;

var start = function () {
    setup(); // Helper Function
    town();  // Change this to fit your first scene
}

window.onload = start;  // Kicks off program

function checkAnswers(answer) {  // Matches Scenes  - replace with yours
    // if (answer == "Think some more") {
    //    thinkSomeMore();
    // } 
    //  else if (answer == "spin in a circle") {
    //    spinInCircle();
    // }
}


/* function town(){  // FIRST SCENE - WELCOMES PLAYER
 * var name = prompt("what is your name?");
 * story("One day you are on your way home from school and you hear a whisper coming from a dark forest you never remember seeing before\
 * \nCome here " + name + " Come here\
 * \nYou can't place the voice, but there is something familiar about it. What do you do?");
 * 
 * choices = ["Think some more", "go into the forest", "ignore it and go home"];
 * answer = setOptions(choices);
 * }
 */ 
  
function forest() {  // SET A SCENE
 * story("There is a house made of candy\
 * \nThere is a fruit vender\
 * \nThere is a small opening in the trees with a ring of mushroom in the middle");
 * 
 * choices = ["Candy house", "Fruit vender", "Field", "Hang out here", "spin in a circle"];
 * answer = setOptions(choices);
 *    
 * }
 */ 
 
/* function spinInCircle() { // CHANGE VALUE IF RETURN
 *     spin = spin + 1;
 *    if (spin == 3) {
 *         story("Why are you doing that?\
 *         \n It makes me a little nauseous just to watching you\n\n");
 *         forest();
 *     } else if (spin == 4) {
 *         story("Seriously, please stop\
 *         \nI can't keep watching this\n\n");
 *        forest();
 *    } else if (spin == 5) {
 *         story("Oh god I have to go\n\n");
 *         forest();
 *    } else if (spin > 5) {
 *         story("We are sorry but the narrator for this bit went home sick.\n\n");
 *         forest();
 *     } else {
 *        story("You let you arm fly freely at your side as you spin in a circle.\
 *         \nAround and around you go as the world blurs in front of you\
 *         \nyou get dizzy and fall to the ground\
 *         \nyou take a moment to gather your thoughts then you stand back up\n\n");
 *         forest();
 *     }
 * }
 */
 
/* function stayQuite() { // Message Example
 * messages=["so your too good to talk to me huh",
 *         "big old person too proud to talk to a pixie",
 *         " you hear the pixie fly away in disgust"];
 *    delayText(messages, 3000, field);
 * 
 * } 
 */
