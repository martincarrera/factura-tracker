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

    vm.newFactura = {};

    facturas = firebase.database().ref().child("facturas");
    vm.facturas = $firebaseArray(facturas);

    rules = firebase.database().ref().child("rules");
    vm.rules = $firebaseArray(rules);

    vm.querySearch = (query) => {
      var results = query ? vm.rules.filter( vm.createFilterFor(query) ) : vm.rules, deferred;
      return results;
    }

    vm.createFilterFor = (query) => {
      return (rule) => {
        return (angular.lowercase(rule.description).indexOf(angular.lowercase(query)) === 0);
      };
    }

    vm.addFactura = () => {
      var createdDate = new Date();
      var expirationDate = new Date(createdDate.valueOf());
      var days = 15;
      expirationDate.setDate(expirationDate.getDate() + days);
      vm.facturas.$add({
        motive: vm.newFactura.motive.description,
        guilty: vm.newFactura.user,
        creator: firebase.auth().currentUser.email,
        createdDate: createdDate.toJSON(),
        expirationDate: expirationDate.toJSON(),
        paid: false
      });
      vm.newFactura = {};
    };

    vm.payFactura = (factura) => {
      console.log(factura);
    }
  }

})();
