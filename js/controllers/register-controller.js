(function () {

  angular
  .module('factura-tracker')
  .controller('RegisterController', RegisterController);

  function RegisterController() {
    var vm = this;
    vm.email = "";
    vm.password = "";

    vm.createUserWithEmailAndPassword = () => {
      firebase.auth().createUserWithEmailAndPassword(vm.email, vm.password)
      .then(data => {
        if (data.uid) {
          console.log('Usuario ' + data.email + ' logeado.');
        }
      });
    }  }

})();
