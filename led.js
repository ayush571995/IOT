var Firebase=require("firebase");
var five = require("johnny-five");
var config = {
  apiKey: "your api key",
  authDomain: "name of project.firebaseapp.com",
  databaseURL: "url of database"
};
Firebase.initializeApp(config);
var ref = Firebase.database().ref();
// Create a new reference of Firebase db
//var ref = new firebase("https://getvalues-838ac.firebaseio.com/getvalues");
  // fictional URL, replace it with your own from Firebase
var board = new five.Board();
board.on("ready", function() {
  // Create an Led on pin 13
  var led = new five.Led(13);
  // Blink every half second
  ref.on("value", function(snapshot) {
  /*var dataRef = snapshot.re;
  var dataKey = snapshot.key;
  */console.log(snapshot.val());
  var v=snapshot.val();
  if(Number(v['getvalues'])==1){
  	led.on();
  }
  else if(Number(v['getvalues'])==0){
  	led.off();
  }
});
});