
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
// button for adding info
$("#addU").on("click", function(event) {
  event.preventDefault();

  // Grab values from text boxes
  var name = $("#name-input").val().trim();
  var destination = $("#dest-input").val().trim();
  var firstTrainTime =$("#time-input").val().trim();
  var frequency = $("#frequent-input").val().trim();

  var newTrain = {
    name: name,
    destination: destination,
    firstTrainTime: firstTrainTime,
    frequency: frequency,
    dateAdded:firebase.database.ServerValue.TIMESTAMP
     
  };
console.log (newTrain);
// Code for push to database
database.ref("/users").push(newTrain);

console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.firstTrainTime);
console.log(newTrain.frequency);

// clears the text boxes
$("#name-input").val("");
$("#dest-input").val("");
$("#time-input").val("");
$("#frequent-input").val("");
    
});


database.ref("/users").on("child_added", function(childSnapshot, prevChildKey){

//console.log(childSnapshot.val());

  // storing childsnapshot.val() in variable
  //var snap = childSnapshot.val();
  var trainName = childSnapshot.val().name;
  var trainDest = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().firstTrainTime;
  var trainFreq = childSnapshot.val().frequency;

  console.log(trainName);
  console.log(trainDest);
  console.log(trainTime);
  console.log(trainFreq);


  $("#train").append("<tr><td>" + trainName + "</td>");
  $("#des").append("<tr><td>" + trainDest + "</td>");
  $("#fre").append("<tr><td>" + trainFreq + "</td>");
  $("#nA").append("<tr><td>" + " " + "</td>");
  $("#minA").append("<tr><td>" + " " + "</td>");

 

  // Change the HTML
  /*$("#train").text(snap.name);
  $("#des").text(snap.destination);
  $("nextA").text(snap.firstTrainTime);
  $("#fre").text(snap.frequency);

  //var firstT = moment.unix(trainTime).format("MM/DD/YY");  

  $("#trainT").append ("<tr><td" + trainName + "></td><td" + trainDest + "></td><td" + trainTime + "></td><td" + trainFreq + "></td></tr>");*/
  
  // Handle the error
}, function(errorObject) {
console.log("Errors handled: " + errorObject.code);
 });






