var chai = require('chai');
var expect = chai.expect;
var tutorial = require('../app/tdd-tutorial');
var _ = require('lodash');


describe('Controller: tdd-tutorial', function () {
	it('Should have an \'aPublicFunction\' function', function () {
		expect(_.isFunction(tutorial.aPublicFunction)).to.equal(true);
	});

	it('Should have a getSum function', function () {
		expect(_.isFunction(tutorial.getSum)).to.equal(true);
	});

	it('Should have a getProduct function', function () {
		expect(_.isFunction(tutorial.getProduct)).to.equal(true);
	});

	it('Should have a calculateSum function', function () {
		expect(_.isFunction(tutorial.calculateSum)).to.equal(true);
	});

	it('Should have a calculateProduct function', function () {
		expect(_.isFunction(tutorial.calculateProduct)).to.equal(true);
	});

	it('Should have a sumTimesProduct function', function () {
		expect(_.isFunction(tutorial.sumTimesProduct)).to.equal(true);
	});

	it('Should have an isPositive function', function() {
		expect(_.isFunction(tutorial.isPositive)).to.equal(true);
	});

	describe('When calling public functions', function () {
		describe('When isPositive is called with 1', function() {
			it('Should return true', function() {
				expect(tutorial.isPositive(1)).to.equal(true);
			});
		});

		describe('When isPositive is called with 0', function() {
			it('Should return true', function() {
				expect(tutorial.isPositive(0)).to.equal(true);
			});
		});

		describe('When isPositive is called with -1', function() {
			it('Should return false', function() {
				expect(tutorial.isPositive(-1)).to.equal(false);
			});
		});

		describe('When calculateSum is called with 1 and 2', function () {
			it('Should return 3', function () {
				expect(tutorial.calculateSum(1,2)).to.equal(3);
			});

			describe('When getSum is called', function () {
				it('Should return 3', function () {
					expect(tutorial.getSum()).to.equal(3);
				});
			});
		});

		describe('When calculateSum is called with -1 and 1', function () {
			it('Should return 0', function () {
				expect(tutorial.calculateSum(-1,1)).to.equal(0);
			});

			describe('When getSum is called', function () {
				it('Should return 0', function () {
					expect(tutorial.getSum()).to.equal(0);
				});
			});
		});

		describe('When calculateProduct is called with 1 and 2', function () {
			it('Should return 2', function () {
				expect(tutorial.calculateProduct(1,2)).to.equal(2);
			});

			describe('When getProduct is called', function () {
				it('Should return 2', function () {
					expect(tutorial.getProduct()).to.equal(2);
				});
			});
		});

		describe('When calculateProduct is called with -1 and 2', function () {
			it('Should return -2', function () {
				expect(tutorial.calculateProduct(-1,2)).to.equal(-2);
			});

			describe('When getProduct is called', function () {
				it('Should return -2', function () {
					expect(tutorial.getProduct()).to.equal(-2);
				});
			});
		});
		
	});

});