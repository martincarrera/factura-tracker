(function () {

  angular
    .module('factura-tracker')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$state', '$firebaseArray'];

  function HomeController($state, $firebaseArray) {
    var vm = this;

    vm.signout = function() {
      firebase.auth().signOut().then(function() {
        $state.go('login');
      });
    }

    ref = firebase.database().ref().child("facturas");
    vm.facturas = $firebaseArray(ref);

    vm.addFactura = function() {
      vm.facturas.$add({
        text: vm.facturasText,
        creator: firebase.auth().currentUser.email,
        createdDate: new Date()
      });
      vm.facturasText = "";
    };
  }

})();
