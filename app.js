var app = angular.module("facturaTracker", ["firebase"]);

app.controller("mainCtrl", function($scope, $firebaseObject, $firebaseArray) {

  var config = {
     apiKey: "AIzaSyDrZ4JH7jmMsJxuVVlGsb6CrUDGhojb03M",
     authDomain: "factura-tracker.firebaseapp.com",
     databaseURL: "https://factura-tracker.firebaseio.com",
     storageBucket: "factura-tracker.appspot.com",
   };

  firebase.initializeApp(config);

  var ref = firebase.database().ref();

  // download the data into a local object
  var syncObject = $firebaseObject(ref);

  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");

  ref = firebase.database().ref().child("messages");
  $scope.messages = $firebaseArray(ref);

  $scope.addMessage = function() {
    $scope.messages.$add({
      text: $scope.newMessageText
    });
  };
});
