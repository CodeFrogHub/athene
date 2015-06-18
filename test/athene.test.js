var should = require('should');
describe('Athene', function() {
	it('should be able to require', function() {
		athene = require('..');
		should.exist(athene);
	});
});