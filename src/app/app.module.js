(function (){
  'use strict';

  angular.module('app', [
    'ngRoute',

    'app.core',
    'app.store',
    'app.product'
  ])
  .config(RouteProvider);

  RouteProvider.$inject = ['$routeProvider'];

  function RouteProvider($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/store/store.html',
        controller: 'StoreController',
        controllerAs: 'store'
      })
      .when('/product/:productId', {
        templateUrl: 'app/product/product.html',
        controller: 'ProductController',
        controllerAs: 'product'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
