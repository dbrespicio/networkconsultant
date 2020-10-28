

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDGBb2zHNGJ9yORUatjNp6jCG_bBXVWnMQ",
    authDomain: "panulat-pinoy.firebaseapp.com",
    databaseURL: "https://panulat-pinoy.firebaseio.com",
    projectId: "panulat-pinoy",
    storageBucket: "panulat-pinoy.appspot.com",
    messagingSenderId: "714524400678",
    appId: "1:714524400678:web:6c8228394e9a4e426e1ae7",
    measurementId: "G-7YY7FWG462"
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
	var name = getInputVal('name'); 
	var title = getInputVal('title');
	var notes = getInputVal('notes');

	// Save message
	saveMessage(title, notes, name);

	  // Show alert
	  document.querySelector('.alert').style.display = 'block';

	  // Hide alert after 3 seconds
	  setTimeout(function(){
	    document.querySelector('.alert').style.display = 'none';
	  },3000);


  	// Clear form
  	document.getElementById('notesForm').reset();
}

//Function to get values of forms
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(title, notes, name){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
	title:title,
	notes:notes,
	name:name
	});
}