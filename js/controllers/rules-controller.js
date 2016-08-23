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
      if(vm.newRuleText !== "") {
        vm.rules.$add({
          description: vm.newRuleText,
          creator: firebase.auth().currentUser.email,
          createdDate: Date(),
          type: "facturas"
        });
        vm.newRuleText = "";
      }
    };
  }

})();
