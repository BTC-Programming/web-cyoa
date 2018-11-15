/* This is a starter with examples.  Remove the examples once you have made your own versions. */

// core variables
var messages = []; // for a sequence of messages
var choices = [];
var answer = null;

// story function variables
var name = null;
var spin = 0;

function checkAnswers(answer) {  // Function names match story scenes. Replace with your functions
    if (answer == "Think some more") {
        thinkSomeMore();
    } 
    else if (answer == "forest") {
        forest();
    }
}

function town(){  // FIRST STORY SCENE - WELCOMES PLAYER
   var name = prompt("what is your name?");
   story("One day you are on your way home from school and you hear a whisper coming from a dark forest you never remember seeing before\ \nCome here " + name + " Come here\
   \nYou can't place the voice, but there is something familiar about it. What do you do?");
   choices = ["Think some more", "go into the forest", "ignore it and go home"];
   answer = setOptions(choices);
 }
   
function forest() {  // HOW TO SET A SCENE
    story("There is a house made of candy\ \nThere is a fruit vender\ \nThere is a small opening in the trees with a ring of mushroom in the middle");
    choices = ["Candy house", "Fruit vender", "Field", "Hang out here", "spin in a circle"];
    answer = setOptions(choices);   
 }
