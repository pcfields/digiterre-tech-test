describe('Store controller', function () {
  var $controller,
      controller,
      $rootScope,
      $q,
      productServiceData,
      products = mockData.getMockProducts();

  beforeEach(function() {
    module('app.store');

    inject(function(_$controller_, _$q_, _$rootScope_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $q = _$q_;
    });

    var productServiceData = {
      getProducts: function() {
        return $q.when(products);
      }
    };

    controller = $controller('StoreController', {
      productService: productServiceData
    });
  });

  it('to exists', function() {
    expect(controller).toBeDefined();
  });

  describe('Before Initialize', function() {

    it('should have no products', function() {
      var numberOProducts = controller.products.length;

      expect(numberOProducts).toBe(0);
    });
  });

  describe('After Initialize', function() {
    var numberOfProducts;

    beforeEach(function() {
      $rootScope.$apply();
      numberOfProducts = controller.products.length;
    });

    it('should have products', function() {
      expect(numberOfProducts).toBeGreaterThan(0);
    });

    it('should have mock products', function() {
      expect(numberOfProducts).toEqual(products.length);
    });

  });
});
