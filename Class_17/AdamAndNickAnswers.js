// Question 1

for (var i = 0; i < 10; i++) {
  console.log("pizza!!");
};

var x = 0;

while (x < 10) {
  console.log("pizza!");
  x++;
};

// Question 2

/*
Run it in the Node console, run the file in the browser.
*/

// Question 3

/*
Arrays are a data type. They are an ordered collection: an indexed collection of elements of various data types, starting at index 0. Access to the elements is done by referencing each element's index.
*/

// Question 4

var names = [
  'Adam',
  'Nick',
  'Amy',
  'Claudia',
  'Daan',
  'Filippo'
]

names.forEach(function(element) {
  console.log(element);
});

// Question 5

/*
An Array is a collection. A loop is a function that runs a block of code for a defined number of times. An array would be used to store a collection of data, and a loop would be used to automate running a block of code multiple times.
*/

// Question 6

/*
A mathematical function is being declared and called "multiply", which is going to return the product of the multiplication of its parameters. This particular function accepts two parameters, a and b. The function is then called passing 2 and 3 as arguments which returns 6.
*/

// Question 7

/*
Inside the function, call console.log(<parameter name>) for each parameter.
*/

// Question 8

/*
In JavaScript, scope refers to the visibility of your variables, or which parts of your program can access them. Scopes can be globally or locally defined.
*/

// Question 9

var name = Rembert

//Place A: Name is accessible.

var codaisseur = function() {
  //Place B: Name is accessible.
}
```
```
var codaisseur = function() {
  var name = Rembert
  //Place C: Name is redefined and accessible. This instance of name does not hold the same value as the one defined in a global scope. The value of name in this particular function is different, because it's defined in a local scope.
}

//Place D:  Name defined in global scope is accessible, ; This is the global instance and the name defined inside the function above, is no longer accessible.

// Question 10
