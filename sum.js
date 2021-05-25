// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments
// Edge case: We need at least 2 arguments.
const args = process.argv.slice(2);

console.log('args:', args);

// Single-responsibility principle => a function should do a single thing

convertToNum = function (nums) {
  const ouputNums = [];

  for (let num of nums) {
    ouputNums.push(Number(num));
  }

  return ouputNums;
};

const allNums = function (nums) {
  for (let num of nums) {
    // Edge case: If any argument is not a number, output an error message
    if (isNaN(num)) {
      console.log('Please enter only numbers');
      //stop the execution
      process.exit();
    }
  }
  return nums;
};

const allInt = function (nums) {
  const ouputNums = [];

  for (let num of nums) {
    // Edge case: If any argument is not a whole number, skip it
    if (Number.isInteger(num)) {
      ouputNums.push(Number(num));
    }
  }

  return ouputNums;
};

// Sum: 
// goal get a list of numbers and add them up, return the sum

const sum = function (numbers) {
  //accumulator
  let total = 0;

  // goes through each
  for (let num of numbers) {
    // Add them up
    // total <- total + nb
    total += num;

    console.log('num:', num, typeof num, 'Total:', total);
  }

  return total;
};

// prints out the sum
const result = sum(allInt(allNums(convertToNum(args))));
console.log(`Sum: ${result}`);
