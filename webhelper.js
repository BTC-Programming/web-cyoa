window.onload = start;

var buttonElement = document.getElementById("button1");
var currentStoryElement = document.getElementById("currentStory");
var dropdown = document.getElementById("choices");

function start() {
  setup();
  town();
}

function story(text) {
  currentStoryElement.innerHTML = text;
}

function setOptions(options) {
  while (dropdown.options.length) {
    dropdown.remove(0);
  }
  for (var i = 0; i < options.length; i++) {
    var option = new Option(options[i], options[i]);
    dropdown.options.add(option);
  }
}

function delayText(text, delay) {
  var index = 0;
  story("");
  var callback = function (text) {
    story(currentStoryElement.innerHTML  + text[index]+ "<br />"+ "<br />");
    index += 1;
    if (index >text.length-1){
      clearInterval(timer);
    }
  }
  var timer = setInterval(function () {
    callback(text);
  }, delay);
}

function setup() {
  // setOptions();
  setOptions(["test 1", "test 2", "test3"]); 
  buttonElement.innerHTML = "What will you do?"; 
  buttonElement.onclick = function () {
    var dropdown = document.getElementById("choices");
    checkAnswers(dropdown.value);
  }
}
