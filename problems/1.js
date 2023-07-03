/*
Add all the natural numbers below one thousand that are multiples of 3 or 5.

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. 
*/


function sumOfMultiple(limit) {
let sum = 0;
    for (let i = 3; i < limit; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfMultiple(1000));
