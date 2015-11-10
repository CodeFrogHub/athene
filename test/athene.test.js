var should = require('should');
var Athene = require('..');
describe('Athene', function() {
	it('should be able to require', function() {
		should.exist(Athene);
	});

	it('should be able to instantiate an athene app', function() {
		new Athene("dummyTarget", {});
	});

	it('should throw an exception if no target defined', function() {
		(function(){
		  new Athene();
		}).should.throw('No target defined');
	});

	it('should have a static method load', function() {
		Athene.should.have.property('load');
		Athene.load.should.be.a.Function;
	});

	it('should have a static method bootstrap', function() {
		Athene.should.have.property('bootstrap');
		Athene.bootstrap.should.be.a.Function;
	});

	context('instance', function() {
		var instance = new Athene("dummyTarget", {});

		it('should have a method bootstrap', function() {
			instance.should.have.property('bootstrap');
			instance.bootstrap.should.be.a.Function;
		});

		it('should have a method start', function() {
			instance.should.have.property('start');
			instance.start.should.be.a.Function;
		});

		it('should have a method stop', function() {
			instance.should.have.property('stop');
			instance.stop.should.be.a.Function;
		});
	});
});
