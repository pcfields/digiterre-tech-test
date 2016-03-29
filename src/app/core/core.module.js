(function (){
  'use strict';

  angular
    .module('app.core', [])
    .constant('APIKEY','UGV0ZXIgRmllbGRz')
    .config(CoreConfig);

  CoreConfig.$inject = ['$httpProvider', 'APIKEY'];

  function CoreConfig($httpProvider, APIKEY) {
    $httpProvider.defaults.headers.common["Authorization"] = "Basic " + APIKEY;
  }
})();
