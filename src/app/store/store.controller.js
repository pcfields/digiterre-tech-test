(function () {
  'use strict';

  angular
    .module('app.store')
    .controller('StoreController', StoreController);

  StoreController.$inject = ['productService'];

  function StoreController(productService) {
    var store = this;

    store.products = [];

    getProducts();

    function getProducts() {
      productService.getProducts()
        .then(function(products) {
          store.products = products;
        });
    }
  }
})();
