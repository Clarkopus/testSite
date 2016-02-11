var myButton = document.querySelector('button'); //querySelector is used to find a certian HTML tag
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Hello there, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello there, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
