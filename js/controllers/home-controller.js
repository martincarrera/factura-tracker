(function () {

  angular
    .module('factura-tracker')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$state', '$firebaseArray'];

  function HomeController($state, $firebaseArray) {
    var vm = this;
    vm.searchText = "";
    vm.searchUser = "";

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

    users = firebase.database().ref().child("users");
    vm.users = $firebaseArray(users);

    vm.querySearch = (query) => {
      var results = query ? vm.rules.filter( vm.createFilterFor(query) ) : vm.rules, deferred;
      return results;
    };

    vm.querySearchUser = (query) => {
      var results = query ? vm.users.filter( vm.createFilterForUser(query) ) : vm.users, deferred;
      if (query !== "") {
          results.push({"name": query});
      }
      return results;
    };

    vm.createFilterFor = (query) => {
      return (rule) => {
        return rule.description.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      };
    };

    vm.createFilterForUser = (query) => {
      return (user) => {
        return user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      };
    };

    vm.addFactura = () => {
      var createdDate = new Date();
      var expirationDate = new Date(createdDate.valueOf());
      var days = 15;
      expirationDate.setDate(expirationDate.getDate() + days);
      if(vm.newFactura.motive && vm.newFactura.user) {
        vm.facturas.$add({
          motive: vm.newFactura.motive.description,
          guilty: vm.newFactura.user.name,
          creator: firebase.auth().currentUser.email,
          createdDate: createdDate.toJSON(),
          expirationDate: expirationDate.toJSON(),
          paid: false,
          verifier: null
        });
        vm.newFactura = {};
        vm.facturaForm.$setPristine();
        vm.facturaForm.$setUntouched();
      }
    };

    vm.payFactura = (factura) => {
      factura.paid = true;
      factura.verifier = firebase.auth().currentUser.email;
      vm.facturas.$save(factura);
    };
  }

})();
