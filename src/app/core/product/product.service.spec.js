describe('productService', function() {
  var $httpBackend,
      $rootScope,
      productService,
      products = mockData.getMockProducts();

  beforeEach(function() {
    module('app.core');

    inject(function(_$httpBackend_, _$rootScope_, _productService_){
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;
      productService = _productService_;
    });
  });

  it('should exists', function() {
    expect(productService).toBeDefined();
  });

  describe('getProducts', function() {

      it('calls /api/products/', function() {
        $httpBackend
          .when('GET', 'http://frontenddevinterview.azurewebsites.net/api/products/')
          .respond(200, [{}]);

        productService.getProducts()
          .then(function(data) {
            expect(data).toBeDefined();
          });

        $httpBackend.flush();
      });

      it('reports error if server fails', function() {
        $httpBackend
          .when('GET', 'http://frontenddevinterview.azurewebsites.net/api/products/')
          .respond(500, 'failed');

        productService.getProducts()
          .catch(function(error) {
            expect(error.data).toBe('failed');
          });

        $httpBackend.flush();
      });
  });

  describe('getProductById', function() {

    it('calls /api/products/:productId', function() {
      $httpBackend
        .when('GET', 'http://frontenddevinterview.azurewebsites.net/api/products/101')
        .respond(200, [{}]);

      productService.getProductById(101)
        .then(function(response) {
          expect(response).toBeDefined();
        });

      $httpBackend.flush();
    });

    it('reports error if server fails', function() {
        $httpBackend
          .when('GET', 'http://frontenddevinterview.azurewebsites.net/api/products/101')
          .respond(500, 'failed');

        productService.getProductById(101)
          .catch(function(error) {
            expect(error.data).toBe('failed');
          });

        $httpBackend.flush();
      });

  });
});
