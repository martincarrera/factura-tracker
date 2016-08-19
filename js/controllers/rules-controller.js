(function () {

  angular
    .module('factura-tracker')
    .controller('RulesController', RulesController);

  RulesController.$inject = ['$state', '$firebaseArray'];

  function RulesController($state, $firebaseArray) {
    var vm = this;

    if (firebase.auth().currentUser === null) {
      $state.go('login');
    }

    ref = firebase.database().ref().child("rules");
    vm.rules = $firebaseArray(ref);

    vm.addRule = function() {
      vm.rules.$add({
        text: vm.newRuleText
      });
    };
  }

})();
