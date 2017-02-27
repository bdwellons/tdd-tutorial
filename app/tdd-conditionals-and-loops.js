var _ = require('lodash');

var conditionals = {};

// Begin Coding

conditionals.higherOrLower = function(givenNumber, numberToCompare) {
	if (!_.isNumber(givenNumber) || !_.isNumber(numberToCompare)) {
		return "Arguments must be numbers!";
	}

	if (givenNumber > numberToCompare) 
		return 'higher';
	if (givenNumber < numberToCompare)
		return 'lower';
	if (givenNumber === numberToCompare) 
		return 'equal';
}

conditionals.sumOneToOneHundred = function () {
	var sum = 0;

	for (var i = 0; i <= 100; i++) {
		sum += i;
	}

	return sum;
}

conditionals.getSubArray = function (numberOfItemsToGetFromZero) {
	// Array provided - Do not modify
	var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

	if (numberOfItemsToGetFromZero > arr.length) {
		return 'Index out of bounds!';
	}

	var newArr = [];
	for (var i = 0; i < numberOfItemsToGetFromZero; i++) {
		newArr.push(arr[i]);
	}

	return newArr;
}

// End Coding

module.exports = conditionals;