/*
Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.
*/

function isPalindrome(num) {
	const str = String(num)
	const len = str.length
	for (let i = 0; i < Math.floor(len / 2); i++) {
		if (str[i] !== str[len - 1 - i]) {
			return false
		}
	}
	return true
}

function largestPalindromeProduct(n) {
	const maxNum = Math.pow(10, n) - 1
	const minNum = Math.pow(10, n - 1)
	let largestPalindrome = 0

	for (let i = maxNum; i >= minNum; i--) {
		for (let j = maxNum; j >= minNum; j--) {
			const product = i * j
			if (product > largestPalindrome && isPalindrome(product)) {
				largestPalindrome = product
			}
		}
	}
	return largestPalindrome
}

console.log(largestPalindromeProduct(2)) // Example: 9009 = 91 × 99
console.log(largestPalindromeProduct(3)) // Solution for 3-digit numbers
