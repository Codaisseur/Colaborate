// 1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.

for (let i=1; i<11; i++) {
  console.log(i, ' Chicken Noodles');

};

let i = 1;

while ( i < 11 ) {
  console.log(i, ' Chicken Noodles');
  i++;
};


// 2) How do I try out whether my loop is working?
Open Node in the Terminal or paste the code into the (browser)console
Or load the JS file into an HTML doc (index) and open the index file in the browser.

// 3) What are arrays? What is an ordered collection?
Arrays are a JS way to store different types of values
the types ranging from objects/strings/number
arrays are a set of values ordered by index number.

// 4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).

 let names = ["Juno", "Tasos"]

 names.forEach(function(name){
   console.log(name);
 });

// 5) What is the difference between a loop and an array? Why would you use either of them?.

 and array holds information of different types of values
 a loop iterates over certain given values untill a certain condition is met ( true/false etc..)

 // 6) What is happening here?
 //
 // ```
 // var multiply = function(a, b) {
 //   return a * b;
 // };
 //
 // multiply(2, 3)

 Youre creating a virable function named multiply that takes in 2 argument a and b
 inside the function it returns the arguments while multiplying them
 and then you call the function.

 
