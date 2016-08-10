(function () {

  angular
    .module('factura-tracker')
    .controller('RulesController', RulesController);

  RulesController.$inject = ['ngNotify'];

  function RulesController(ngNotify) {
    var vm = this;
  }

})();
