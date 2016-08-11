angular.module('factura-tracker')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
      .state('rules', {
        url: '/rules',
        templateUrl: '../views/rules.html',
        controller: 'RulesController as vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: '../views/login.html',
        controller: 'LoginController as vm'
      })
      .state('register', {
        url: '/register',
        templateUrl: '../views/register.html',
        controller: 'RegisterController as vm'
      });
  });
