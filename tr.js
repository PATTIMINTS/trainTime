
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCxO7e9hwGkM9VFqqdRyTp62hlXdB3uDt4",
    authDomain: "newproject-98bda.firebaseapp.com",
    databaseURL: "https://newproject-98bda.firebaseio.com",
    projectId: "newproject-98bda",
    storageBucket: "newproject-98bda.appspot.com",
    messagingSenderId: "458347176596"
  };
  firebase.initializeApp(config);


var database = firebase.database();

var trainName = "";
var destination = "";
var trainTime = 0;
var frequency = 0;

$("#addU").on("click", function(event) {
event.preventDefault();

// Grab values from text boxes
name = $("#name-input").val().trim();
destination = $("#dest-input").val().trim();
firstTrainTime = $("#time-input").val().trim();
frequency = $("#frequent-input").val().trim();

// Code for push to database
database.ref("/users").push({
    name: name,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
});
});
database.ref("/users").on("child_added", function(snapshot){

  // storing snapshot.val() in variable
  var snap = snapshot.val();
  console.log(snap);

  console.log(snap.name);
  console.log(snap.destination);
  console.log(snap.firstTrainTime);
  console.log(snap.frequency);

  // Change the HTML
  $("#train").text(snap.name);
  $("#des").text(snap.destination);
  $("#fre").text(snap.frequency);
  
  // Handle the error
}, function(errorObject) {
console.log("Errors handled: " + errorObject.code);
 });






