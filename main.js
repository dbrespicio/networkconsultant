

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyAq151ROuCugiOsc7BgGkgmCBrUSHVf26Q",
	authDomain: "network-consultation.firebaseapp.com",
	databaseURL: "https://network-consultation.firebaseio.com",
	projectId: "network-consultation",
	storageBucket: "network-consultation.appspot.com",
	messagingSenderId: "460684421183",
	appId: "1:460684421183:web:96e1d3fc2f3e0aa7ed708a",
	measurementId: "G-Q2XD5ZQ6E4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// Reference collection
var messagesRef = firebase.database().ref('notes');

// Listen for form submit
document.getElementById('notesForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  	e.preventDefault();


	// Get values
	//var name = getInputVal('name');
	//var email = getInputVal('email');
	var title = getInputVal('title');
	var notes = getInputVal('notes');

	// Save message
	saveMessage(title, notes);

	  // Show alert
	  document.querySelector('.alert').style.display = 'block';

	  // Hide alert after 3 seconds
	  setTimeout(function(){
	    document.querySelector('.alert').style.display = 'none';
	  },3000);


  	// Clear form
  	document.getElementById('contactForm').reset();
}

//Function to get values of forms
function getInputVal(id){
  return document.getElementById(id).value;
}


// Save message to firebase
function saveMessage(title, notes){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
	title:title,
	notes:notes
	});
}