(function () {

  angular
  .module('factura-tracker')
  .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$state'];

  function RegisterController($state) {
    var vm = this;
    vm.email = "";
    vm.password = "";
    vm.name = "";
    vm.lastName = "";

    var usersRef = firebase.database().ref().child('users');

    vm.createUserWithEmailAndPassword = () => {
      firebase.auth().createUserWithEmailAndPassword(vm.email, vm.password)
      .then(data => {
        if (data.uid) {
          usersRef.push({
            "email": vm.email,
            "name": vm.name
          });
          $state.go('home');
        }
      });
    }  }

})();
