angular.module('factura-tracker', ['ngMaterial', 'ui.router', 'ngNotify', 'firebase'])
.config(function() {
  var config = {
      apiKey: "AIzaSyDrZ4JH7jmMsJxuVVlGsb6CrUDGhojb03M",
      authDomain: "factura-tracker.firebaseapp.com",
      databaseURL: "https://factura-tracker.firebaseio.com",
      storageBucket: "factura-tracker.appspot.com",
    };

   firebase.initializeApp(config);
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey', {
      'default': '500',
      'hue-1': '100',
      'hue-2': '300',
      'hue-3': '700'
    })
    .accentPalette('pink', {
      'default': 'A200'
    });
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
