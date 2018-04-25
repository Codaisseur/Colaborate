// 1. to iterate through the same code several times.
var food = 'white rice';

for (var i = 1; i <= 10; i++) {
  console.log(i + ": " +food);
}

var count = 1;
while(count < 11){
  console.log(count + ": " +food);
  count++
}

// 2. console.log in terminal
// 3. a collection of datatypes in a ordered way starting from index 0

var names = ['Claudia', 'Ami'];

names.forEach(function(name) {
  console.log(name);
});

// 5.The loop iterates through data and the array stores data. You would use an array to store information and a loop to iterate through information.

// 6. It's a function that takes two arguments and multiply it by each other and returns that multiplication, then the function is being called with the numbers two and three.

// 7.

var multiply = function(a, b) {
  console.log(a + " " + b);
  return a * b;
};

multiply(2, 3);
console.log(multiply(2, 3));
