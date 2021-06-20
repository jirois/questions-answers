/*  
QUESTION:
“Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5.”
*/
function fizzBuzzFunc(startNumber = 1, numberOfTimes = 10) {
  let result = 0;
  for (let x = startNumber; x <= numberOfTimes; x++) {
    result =
      x % 3 === 0 && x % 5 === 0
        ? "fizzbuzz"
        : x % 5 === 0
        ? "buzz"
        : x % 3 === 0
        ? "fizz"
        : x;
    console.log(result);
  }
  return result;
}
fizzBuzzFunc(1, 15);
