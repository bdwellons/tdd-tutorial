var chai = require('chai');
var expect = chai.expect;
var variables = require('../app/tdd-variables');
var _ = require('lodash');


describe('Controller: tdd-variables', function () {
	it('Should have a public \'emptyObject\' object', function () {
		expect(_.isObject(variables.emptyObject)).to.equal(true);
	});

	it('Should have a public \'emptyString\' string', function () {
		expect(_.isString(variables.emptyString)).to.equal(true);
	});

	it('Should have a public \'aNumber\' number', function () {
		expect(_.isNumber(variables.aNumber)).to.equal(true);
	});

	it('Should have a public \'emptyArray\' array', function () {
		expect(_.isArray(variables.emptyArray)).to.equal(true);
	});

	it('Should have a public \'populatedArray\' array', function () {
		expect(_.isArray(variables.populatedArray)).to.equal(true);
	});

	describe('populatedArray array', function () {
		it('Should have 1 member', function () {
			expect(variables.populatedArray.length).to.equal(1);
		});

		it('Should have an object at position ZERO', function () {
			expect(_.isObject(variables.populatedArray[0])).to.equal(true);
		});
	});

	it('Should have a public \'populatedObject\' object', function () {
		expect(_.isObject(variables.populatedObject)).to.equal(true);
	});

	describe('populatedObject object', function () {
		it('Should have a key \'a\' with value \'a value\'', function () {
			expect(variables.populatedObject.a).to.equal('a value');
		});

		it('Should have a key \'b\' with value \'b value\'', function () {
			expect(variables.populatedObject.b).to.equal('b value');
		});
	});

});