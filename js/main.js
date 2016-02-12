var myButton = document.querySelector('button'); 						//querySelector is used to find a certian HTML tag
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName); 								//localstorage is used to store data inside your browser. In this case I am storing a data item called "name" and giving it the value of myName
  myHeading.innerHTML = 'Hello there, ' + myName; 						// Edit the existing h1 tag HTML to say the users name
}


																		//This condition statement is to initialize the functions when the page loads
if(!localStorage.getItem('name')) { 									//Check to see if the data item "name exists"
  setUserName(); 														// If it doesn't then run the function setUserName
} else { 																//Else just set the name to what ever the data item "name" is.
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Hello there, ' + storedName;
}

myButton.onclick = function() { 										//Function to set the button 
  setUserName();
}

