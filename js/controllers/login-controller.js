(function () {

  angular
  .module('factura-tracker')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['$state'];

  function LoginController($state) {
    var vm = this;
    vm.email = "";
    vm.password = "";

    vm.signInWithEmailAndPassword = () => {
      firebase.auth().signInWithEmailAndPassword(vm.email, vm.password)
      .then(data => {
        if (data.uid) {
          console.log('Usuario ' + data.email + ' logeado.');
          $state.go('home');
        }
      });
    }

  }

})();
