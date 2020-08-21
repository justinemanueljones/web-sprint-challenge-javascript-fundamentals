// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation:the scope of internal is higher than nestedFunction, internal can be accessed from within nestedFunction.// 


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){
  const numbers = []
  for(i=1; i<=number; i++){
    numbers.push(i)
  }
  const result = numbers.reduce(function(adder, element){
    return adder + element;
  },0);
  return result;  
}
console.log(summation(4));

// sumTo(4) = 4 + 3 + 2 + 1 = 10 https://javascript.info/task/sum-to//