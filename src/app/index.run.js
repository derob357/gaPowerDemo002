(function() {
  'use strict';

  angular
    .module('gaPow')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
