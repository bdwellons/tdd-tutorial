var chai = require('chai');
var expect = chai.expect;
var conditionals = require('../app/tdd-conditionals-and-loops');
var _ = require('lodash');


describe('Controller: tdd-conditionals', function () {
	it('Should have a public \'higherOrLower\' function', function () {
		expect(_.isFunction(conditionals.higherOrLower)).to.equal(true);
	});

	it('Should have a public \'sumOneToOneHundred\' function', function () {
		expect(_.isFunction(conditionals.sumOneToOneHundred)).to.equal(true);
	});

	it('Should have a public \'getSubArray\' function', function () {
		expect(_.isFunction(conditionals.getSubArray)).to.equal(true);
	});

	describe('higherOrLower function', function () {

		describe('When we call higherOrLower with (2, 3)', function () {
			var result;
			
			beforeEach(function () {
				result = conditionals.higherOrLower(2,3);
			});

			it('Should return "lower"', function () {
				expect(result).to.equal('lower');
			});	

		});

		describe('When we call higherOrLower with (3, 2)', function () {
			var result;
			
			beforeEach(function () {
				result = conditionals.higherOrLower(3,2);
			});

			it('Should return "higher"', function () {
				expect(result).to.equal('higher');
			});	

		});

		describe('When we call higherOrLower with (3, 3)', function () {
			var result;
			
			beforeEach(function () {
				result = conditionals.higherOrLower(3,3);
			});

			it('Should return "equal"', function () {
				expect(result).to.equal('equal');
			});	

		});

		describe('When we call higherOrLower with ("a string", 2)', function () {
			var result;
			
			beforeEach(function () {
				result = conditionals.higherOrLower("a string", 2);
			});

			it('Should return "Arguments must be numbers!"', function () {
				expect(result).to.equal('Arguments must be numbers!');
			});	

		});

		describe('When we call higherOrLower with (2, "a string")', function () {
			var result;
			
			beforeEach(function () {
				result = conditionals.higherOrLower(2, "a string");
			});

			it('Should return "Arguments must be numbers!"', function () {
				expect(result).to.equal('Arguments must be numbers!');
			});	

		});

	});

	describe('sumOneToOneHundred function', function () {

		describe('When we call sumOneToOneHundred', function () {
			var result;

			beforeEach(function () {
				result = conditionals.sumOneToOneHundred();
			});

			it('Should return 5050', function () {
				expect(result).to.equal(5050);
			});

		});

	});

	describe('getSubArray function', function () {

		describe('When we call getSubArray with a number larger than 20', function () {
			var result;

			beforeEach(function () {
				result = conditionals.getSubArray(21);
			});

			it('Should return "Index out of bounds!"', function () {
				expect(result).to.equal('Index out of bounds!');
			});

		});

		describe('When we call getSubArray with a negative number', function () {
			var result;

			beforeEach(function () {
				result = conditionals.getSubArray(-1);
			});

			it('Should return []', function () {
				expect(result.length).to.equal(0);
			});

		});

		describe('When we call getSubArray with 0', function () {
			var result;

			beforeEach(function () {
				result = conditionals.getSubArray(-1);
			});

			it('Should return []', function () {
				expect(result.length).to.equal(0);
			});

		});

		describe('When we call getSubArray with a positive number less than 20', function () {
			var result;

			beforeEach(function () {
				result = conditionals.getSubArray(5);
			});

			it('Should return [1,2,3,4,5]', function () {
				expect(result[0]).to.equal(1);
				expect(result[1]).to.equal(2);
				expect(result[2]).to.equal(3);
				expect(result[3]).to.equal(4);
				expect(result[4]).to.equal(5);
			});

		});

	});
	
});