//# Welcome

//Welcome to this repository where you can get a first glance of collaborating on GitHub! Please answer the following questions:

//# Recap

//1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.

//We use loop to run a repeated code  

var times = 10
for ( var favfood = 0; favfood < times; favfood = favfood + 1) {
console.log(favfood)  
}

var times = 10
while(times > 10) {
  console.log('pasta')
  times++
}


//2) How do I try out whether my loop is working?
//Run it

//3) What are arrays? What is an ordered collection?
//Array is a collections of elements

//4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).

var team = ['lala', 'lola', 'lulu']
var member = ''

team.forEach(function(team) {
  member += `${team}`  
  })
console.log(member)

//5) What is the difference between a loop and an array? Why would you use either of them?.
//Loop is used for repeated
//Function is used for the action. It can be perfomed on the array.

6) What is happening here?

```
var multiply = function(a, b) {
  return a * b;
};

multiply(2, 3)
```
//It's an anonymous function with two arguments. Multiplication

//7) How could we log the arguments of the code above?
console.log(multiply)

//8) What is ‘scope’?
//Scope can be local or global, it refers to the current code. It is a set of functions, objects or variables

//9) Can I use my vars at the following places?

```
var name = Rembert

//Place A
//yes

var codaisseur = function() {
//Place B
}
```
//yes

```
var codaisseur = function() {
  var name = Rembert
  //Place C
}

//Place D
```
//yes

10) Why would you use an object?
//group of the data

11) Create an object ‘teacher', that stores the name,
favorite language and a teach-function of that teacher that will alert you with some useful knowledge.


12) What are the property-names and values of the object you just created?

13) Why would you use git?

14) What is the difference between `git add`,`git commit` and `git push` ?

### Clone this repository and add a file with the answers to these questions to the directory of your class. Name it 'AnswersFromYourName.md' Make sure to add a pull request and make some class mates review it!
