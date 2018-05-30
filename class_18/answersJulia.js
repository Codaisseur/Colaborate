// 1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.
var food = "pizza";
for (var i = 0; i < 10; i++) {
  console.log(food);
}

var helper = 0;

while(helper < 11) {
  console.log(food);
  helper ++;
}

// 2) How do I try out whether my loop is working? - You can us ethe console to check it

// 3) What are arrays? What is an ordered collection? - Arrays a type of data used in JS, that can be assigned to a variable. It is indeed an ordered collection of data (possibly of different types), meabibg every value in the array has its numbered (indexed) place.

// 4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).
var myTeam = ["Julia", "Tasos", "Juno"];
myTeam.forEach(function(name) {
  console.log(name);
});

// 5)What is the difference between a loop and an array? Why would you use either of them? - A Loop is a way to repeat code until a condition is met or for a certain amount of times. An array is a way to store data. You can a loop to iterate through an array or do something with items whithing the array.

// 6)What is happening here?
// ```
// var multiply = function(a, b) {
//   return a * b;
// };
//
// multiply(2, 3)
// - Here we have a function "multiply" that takes took arguments and return their product. In the end we call this function and pass num 2 and num 3 as arguments.

// 7)How could we log the arguments of the code above? - we could do:
var multiply = function(a, b) {
  console.log(`arguments are: ${a} and ${b}`);
  return a * b;
};

multiply(2, 3)

// 8)What is ‘scope’? - Scope is acess space. There is global and local scope. Variables (and functions) declared in global scope will be available to every other variable (and function). Variables declared in local scope (in a function for example) will only be available within this local scope (aka this particular function).

// 9)Can I use my vars at the following places?
// - The first var name can be used in places: A, B, C(?), D.
// - The second var name can only be used in place C.
// Both var codaisseur can be used in places: A and D.


```
var name = Rembert

//Place A

var codaisseur = function() {
  //Place B
}
```
```
var codaisseur = function() {
  var name = Rembert
  //Place C
}

//Place D
```
// 10)Why would you use an object? - An object is a nice way to store data of different types. It allows us to 'describe' a variable giving it various properties of different value types.

// 11)Create an object ‘teacher', that stores the name, favorite language and a teach-function of that teacher that will alert you with some useful knowledge.

var teacher ={
  name: "Rein",
  favoriteLanguage: "Javascript",
  teach: function(){
    alert("Google it!");
  }
}

// 12)What are the property-names and values of the object you just created? - Prop.names: name, favoriteLanguage, teach. Values: "rein", "javascript",
