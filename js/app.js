angular.module('factura-tracker', ['ui.router', 'ngNotify', 'firebase'])
.config(function() {
  var config = {
       apiKey: "AIzaSyDrZ4JH7jmMsJxuVVlGsb6CrUDGhojb03M",
      authDomain: "factura-tracker.firebaseapp.com",
      databaseURL: "https://factura-tracker.firebaseio.com",
      storageBucket: "factura-tracker.appspot.com",
    };

   firebase.initializeApp(config);
})
// .config(function ($httpProvider) {
//   $httpProvider.interceptors.push('AuthInterceptor');
// });
