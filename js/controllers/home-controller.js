(function () {

  angular
    .module('factura-tracker')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$state', '$firebaseArray'];

  function HomeController($state, $firebaseArray) {
    var vm = this;

    if (firebase.auth().currentUser === null) {
      $state.go('login');
    }

    ref = firebase.database().ref().child("facturas");
    vm.facturas = $firebaseArray(ref);

    vm.addFactura = function() {
      vm.facturas.$add({
        text: vm.facturasText
      });
    };
  }

})();
