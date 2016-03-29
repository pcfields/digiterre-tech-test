var mockData = (function() {
  return {
    getMockProducts: getMockProducts,
    getMockProductById: getMockProductById
  };

  function getMockProducts() {
    return [
      {
        'Id': 20,
        'Name': 'productName20',
        'ImageName': 'imageName20.jpg',
        'ImageUrl': 'http://domain.com/imageUrl20',
        'PriceDecimal': 100.0
      },
      {
        'Id': 21,
        'Name': 'productName21',
        'ImageName': 'imageName21.jpg',
        'ImageUrl': 'http://domain.com/imageUrl21',
        'PriceDecimal': 120.0
      }
    ];
  }

  function getMockProductById() {
    return {
      'Description': 'A classic black cat who may bring luck to those who buy her.',
      'Reviews': [
        {
          'Id': 1001,
          'Rating': 5,
          'Reviewer': 'luckyguy',
          'Description': 'The best feline purchase I ever made'
        },
        {
          'Id': 1002,
          'Rating': 4,
          'Reviewer': 'mostly lucky',
          'Description': 'You need to get this cat!'
        }
      ],
      'Id': 101,
      'Name': 'Black',
      'ImageName': 'black.jpg',
      'ImageUrl': 'http://frontenddevinterview.azurewebsites.net/Images/black.jpg',
      'PriceDecimal': 100
    };
  }
})();
