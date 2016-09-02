(function () {

  angular
    .module('factura-tracker')
    .controller('RulesController', RulesController);

  RulesController.$inject = ['$firebaseArray'];

  function RulesController($firebaseArray) {
    var vm = this;

    ref = firebase.database().ref().child("rules");
    vm.rules = $firebaseArray(ref);

    users = firebase.database().ref().child("users");
    vm.users = $firebaseArray(users);

    vm.admin = () => {
      if (vm.users) {
        return vm.users.filter((user) => {
          return user.email === firebase.auth().currentUser.email;
        })[0].admin;
      }
      return false;
    }

    vm.getUserName = () => {
      if (vm.users) {
        return vm.users.filter((user) => {
          return user.email === firebase.auth().currentUser.email;
        })[0].name;
      }
      return "";
    }

    vm.addRule = function() {
      if(vm.newRuleText !== "") {
        vm.rules.$add({
          description: vm.newRuleText,
          creator: vm.getUserName(),
          createdDate: Date(),
          type: "facturas"
        });
        vm.newRuleText = "";
      }
    };
  }

})();
