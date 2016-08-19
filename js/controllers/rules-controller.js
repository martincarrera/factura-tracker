(function () {

  angular
    .module('factura-tracker')
    .controller('RulesController', RulesController);

  RulesController.$inject = ['$firebaseArray'];

  function RulesController($firebaseArray) {
    var vm = this;

    ref = firebase.database().ref().child("rules");
    vm.rules = $firebaseArray(ref);

    vm.addRule = function() {
      vm.rules.$add({
        text: vm.newRuleText
      });
    };
  }

})();
