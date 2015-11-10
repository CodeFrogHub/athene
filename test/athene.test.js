var should = require('should');
var Athene = require('..');
describe('Athene', function() {
	it('should be able to require', function() {
		should.exist(Athene);
	});

	it('should be able to instantiate an athene app', function() {
		var application = new Athene();
	});
});
