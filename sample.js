// sample.js — my first JavaScript file
// -------------------------------------
// JavaScript lets a web page DO things (react to clicks, change content, etc.)
// instead of just sitting there like HTML/CSS. This file makes a button on the
// page pop up a message when it's clicked. Each line is commented so you can
// follow what's happening.


// STEP 1: Find the button.
// document.getElementById() searches the page for the ONE element whose id
// matches the text we pass in. In index.html we gave our button id="alert-button",
// so this grabs that button and stores it in a variable called alertButton.
const alertButton = document.getElementById("alert-button");


// STEP 2: Listen for clicks on that button.
// .addEventListener("click", ...) tells the browser: "when this button is
// clicked, run the function I'm giving you." The function is the part between
// the { curly braces } — it runs once per click.
alertButton.addEventListener("click", function () {

  // alert() pops up a small dialog box in the browser with whatever message
  // (text in quotes) we put inside the parentheses.
  alert("Hello! Thank you for visiting the Kaibab Trio website!");

});
