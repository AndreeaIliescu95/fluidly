/// Second try///

function noError(a, b) {
	return 'no Error';
}

function isArray(expect, actual) {
	if (expect.length == actual.length) {
		for (let i = 0; i <= expect.length; i++)
			if (expect[i] != actual[i]) {
				return `Expected  ${expect[i]} but found ${actual[i]} `;
			}
		return 'no error';
	} else return `Expected array length ${expect.length} but found ${actual.length} `;
}

function differentType(expect, actual) {
	return `Expected type of ${typeof expect} but found type of ${typeof actual} `;
}
function sameTypeButDifferent(expect, actual) {
	return `Expected  ${expect} but found ${actual} `;
}
function assertEquals(expect, actual) {
	if (typeof expect !== typeof actual) {
		return differentType(expect, actual);
	} else if (expect.constructor == Array) {
		return isArray(expect, actual);
	} else if (typeof expect == typeof actual && expect === actual) {
		return noError(expect, actual);
	} else {
		return sameTypeButDifferent(expect, actual);
	}
}

/// Initial function ///

// function assertEquals(expect, actual) {
// 	if (typeof expect != typeof actual) {
// 		return `Expected type of ${typeof expect} but found type of ${typeof actual} `;
// 	} else if (expect !== actual) {
// 		if (expect.constructor == Array) {
// 			if (expect.length == actual.length) {
// 				for (let i = 0; i <= expect.length; i++)
// 					if (expect[i] != actual[i]) {
// 						return `Expected  ${expect[i]} but found ${actual[i]} `;
// 					}
// 				return 'no error';
// 			} else return `Expected array length ${expect.length} but found ${actual.length} `;
// 		} else return `Expected  ${expect} but found ${actual} `;
// 	} else {
// 		return 'no error';
// 	}
// }
module.exports = assertEquals;
console.log(assertEquals('abc', 'abc'));
console.log(assertEquals('abcef', 'abc'));
console.log(assertEquals(1, 1));
console.log(assertEquals(1, 2));
console.log(assertEquals(1, '1'));
console.log(assertEquals(['a', 'b', 'c'], ['a', 'b', 'c']));
console.log(assertEquals(['a', 'b'], ['a', 'b', 'c']));
console.log(assertEquals(['a', 'b'], ['a', 'd']));
