/*
Problem 5: Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

*/

function smallestMultiple(n) {
	let smallest = 1
	for (let i = 2; i <= n; i++) {
		smallest = LeastCommonMultiple(smallest, i)
	}
	return smallest
}

function greatestCommonDivisor(a, b) {
	if (b === 0) {
		return a
	}
	return greatestCommonDivisor(b, a % b)
}

function LeastCommonMultiple(a, b) {
	return (a * b) / greatestCommonDivisor(a, b)
}

console.log(smallestMultiple(10)) // Example: 2520
console.log(smallestMultiple(20)) // Solution for numbers 1 to 20
