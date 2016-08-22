(function () {

  angular
  .module('factura-tracker')
  .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$state'];

  function RegisterController($state) {
    var vm = this;
    vm.email = "";
    vm.password = "";

    vm.createUserWithEmailAndPassword = () => {
      firebase.auth().createUserWithEmailAndPassword(vm.email, vm.password)
      .then(data => {
        if (data.uid) {
          console.log('Usuario ' + data.email + ' logeado.');
          $state.go('home');
        }
      });
    }  }

})();
