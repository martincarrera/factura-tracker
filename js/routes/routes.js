angular.module('factura-tracker')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
      .state('rules', {
        url: '/rules',
        templateUrl: '../views/rules.html',
        controller: 'RulesController as vm',
        data: { requireLogin: true }
      })
      .state('login', {
        url: '/login',
        templateUrl: '../views/login.html',
        controller: 'LoginController as vm',
        data: { requireLogin: false }
      })
      .state('register', {
        url: '/register',
        templateUrl: '../views/register.html',
        controller: 'RegisterController as vm',
        data: { requireLogin: false }
      })
      .state('home', {
        url: '/home',
        templateUrl: '../views/home.html',
        controller: 'HomeController as vm',
        data: { requireLogin: true }
      });
  });
