# Welcome

Welcome to this repository where you can get a first glance of collaborating on GitHub! Please answer the following questions:

# Recap

1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.
var food = 'pizza'
for (x =0; x=<10; x++) {console.log(food)}

var food = 'pizza'
var x = 0
while (x<10){
  console.log(food)
  x++ }

2) How do I try out whether my loop is working?
console.log
3) What are arrays? What is an ordered collection?
its a collection of data types ordered by index.
In ordered collection every element has its own index.

4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).
names= ['Lannart', 'Gosia']
names.forEach(function(name){console.log(name)})

5) What is the difference between a loop and an array? Why would you use either of them?.
The loop can itterate over the collection of data which can be an array.

6) What is happening here?

```
var multiply = function(a, b) {
  return a * b;
};

multiply(2, 3)
```
it is a multiply function with a result of 6.

7) How could we log the arguments of the code above?
var multiply = function(a, b) {
console.log(arguments[0])
  return a * b;
};
multiply(2, 3)

8) What is ‘scope’?


9) Can I use my vars at the following places?

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

10) Why would you use an object?

11) Create an object ‘teacher', that stores the name,
favorite language and a teach-function of that teacher that will alert you with some useful knowledge.
var teacher
12) What are the property-names and values of the object you just created?

13) Why would you use git?

14) What is the difference between `git add`,`git commit` and `git push` ?

### Clone this repository and add a file with the answers to these questions to the directory of your class. Name it 'AnswersFromYourName.md' Make sure to add a pull request and make some class mates review it!
