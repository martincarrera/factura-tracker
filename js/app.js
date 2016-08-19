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
.run(function routesInterceptor($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;
      if (requireLogin && (firebase.auth().currentUser === null)) {
        event.preventDefault();
        $state.go('login');
      }
    });
})
// .config(function ($httpProvider) {
//   $httpProvider.interceptors.push('AuthInterceptor');
// });
