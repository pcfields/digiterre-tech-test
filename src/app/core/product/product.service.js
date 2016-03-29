(function (){
  'use strict';

  angular
    .module('app.core')
    .factory('productService', productService);

  productService.$inject = ['$http', '$q'];

  function productService($http, $q) {
    var PRODUCTS_API_URL = 'http://frontenddevinterview.azurewebsites.net/api/products/';

    var service = {
      getProducts: getProducts,
      getProductById: getProductById
    };

    return service;

    function getProducts() {
      return $http.get(PRODUCTS_API_URL)
        .then(getProductsSuccess)
        .catch(getProductsFailed);

      function getProductsSuccess(response) {
        return response.data;
      }

      function getProductsFailed(error) {
        return $q.reject(error);
      }
    }

    function getProductById(productId) {
      return $http.get(PRODUCTS_API_URL + productId)
        .then(getProductByIdSuccess)
        .catch(getProductByIdFail);

      function getProductByIdSuccess(response) {
        return response.data;
      }

      function getProductByIdFail(error) {
        return $q.reject(error);
      }
    }
  }
})();
