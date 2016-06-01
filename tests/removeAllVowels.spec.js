describe('removeAllVowels Filter', function () {
	var $controller, remVowels

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		remVowels = $filter('removeAllVowels');
	}));

  it('should remove all the vowels from a word', function(){

    expect(remVowels('Stevie')).toEqual('Stv')

  })

});
