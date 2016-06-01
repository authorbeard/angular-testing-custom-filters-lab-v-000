describe('Favorite Food Filter', function () {
	var $controller, favFood

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		favFood = $filter('favoriteFood');
	}));

  it('should filter the list of contacts by their favorite foods', function(){
    var people = [
      {
        name: 'jim"',
        favoriteFood: 'deez', 
      },{
        name: 'jenny', 
        favoriteFood: 'nuts' 
      }, {
        name: 'bill',
        favoriteFood: 'burritos'
      }
      ]

    expect(favFood(people, 'nuts')[0].name).toEqual('jenny')

  })

	
});
