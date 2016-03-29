(function () {
  'use strict';

  angular
    .module('app.product')
    .controller('ProductController', ProductController);

  ProductController.$inject = ['$q', '$routeParams', 'productService'];

  function ProductController($q, $routeParams, productService) {
    var product = this;

    product.details = {};

    getProductById($routeParams.productId);

    function getProductById(productId) {
      productService.getProductById(productId)
        .then(function(product) {
          product.details = product;
        });
    }
  }
})();
