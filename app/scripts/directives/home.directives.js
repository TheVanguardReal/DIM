(function() {
  'use strict';

  angular.module('app.directives')
    .directive('renderColOptions', ColOptionsDirective);

  function ColOptionsDirective() {
    return {
      restrict: 'A',
      controller: ColOptionsController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function ColOptionsController() {
    let vm = this;

    vm.columns = {
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9
    };

    vm.select = function() {
      vm.selected = 4;
    };
  }

  // more directives for home page here
}());