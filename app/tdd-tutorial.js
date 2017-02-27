var tutorial = {};

var sum;
var product;

tutorial.aPublicFunction = function () {
	return true;
}

tutorial.getSum = function () {
	return sum;
}

tutorial.getProduct = function () {
	return product;
}

tutorial.calculateSum = function(a, b) {
	sum = a + b;
	return sum;
}

tutorial.calculateProduct = function (a, b) {
	product = a * b;
	return product;
}

tutorial.isPositive = function (a) {
	return (a > -1) ? true : false;
}

tutorial.sumTimesProduct = function () {
	return sum * product;
}

module.exports = tutorial;