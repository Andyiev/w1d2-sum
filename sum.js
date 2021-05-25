// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments
// Edge case: We need at least 2 arguments.
const args = process.argv.slice(2);

console.log('args:', args);

// Single-responsibility principle => a function should do a single thing

convertToNum = function(nums) {
  const ouputNums = [];


  return ouputNums;
}

const sum = function (numbers) {
  //accumulator
  let total = 0;

  // goes through each
  for (let num of numbers) {
    // Edge case: If any argument is not a whole number, skip it

    // convert str to number
    const nb = Number(num);
    // Edge case: If any argument is not a number, output an error message
    if (isNaN(nb)) {
      console.log('Please enter only numbers');
      //stop the execution
      process.exit();
    }
    // if (num % 1 === 0) {
    if (Number.isInteger(nb)) {
      // Add them up
      // total <- total + nb
      total += nb;
    }

    console.log('num:', nb, typeof nb, 'Total:', total);
  }

  return total;
};

// prints out the sum
const result = sum(args);
console.log(`Sum: ${result}`);
