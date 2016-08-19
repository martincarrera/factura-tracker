(function () {

  angular
    .module('factura-tracker')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$firebaseArray'];

  function HomeController($firebaseArray) {
    var vm = this;

    ref = firebase.database().ref().child("facturas");
    vm.facturas = $firebaseArray(ref);

    vm.addFactura = function() {
      vm.facturas.$add({
        text: vm.facturasText
      });
    };
  }

})();
