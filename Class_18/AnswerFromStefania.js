
# Welcome

Welcome to this repository where you can get a first glance of collaborating on GitHub! Please answer the following questions:

# Recap

1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.
var x = 10
for (var y = 0; y < x ; y ++) {console.log('LASAGNE')};

var x=0;
while (true) {
  if (9 < x) {
    break;
  }
  console.log("LASAGNA");
  x ++; }


2) How do I try out whether my loop is working?
I would use the Console browser or node in Iterm

Console

3) What are arrays? What is an ordered collection?
As are arrays are ordered collections of elements, it allows to have a list of string, number or objects ordered by an index that starts counting from 0

4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).
Var myArray = ['Anton','Rick', 'Danielle', 'Arjen'], result = ''
myArray.forEach(function(x) {result += '${x}'})

5) What is the difference between a loop and an array? Why would you use either of them?.
  A loop needs an inizialization/counter, a conditional and a final expression, and an array is just a collection of strings, integer or Objects. I can use both of them if I need to loop the content of an array

6) What is happening here?

```
var multiply = function(a, b) {
  return a * b;
};

multiply(2, 3)
```
 this is a Recursive Function, a function that calls itself

7) How could we log the arguments of the code above?


8) What is ‘scope’?
It is a set of variables or objects or function we can have access to, locally or globally
Local scope is used when for example we write a function and we name a variable inside the function, this variable would have no meaning outside of the function

9) Can I use my vars at the following places?
in the first case you set a variable with a global scope,
in the second case the variable can be only called when using the function codaisseur

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

When I need to group data and behaviour, I need to include them inside {}

11) Create an object ‘teacher', that stores the name,
favorite language and a teach-function of that teacher that will alert you with some useful knowledge.

var teacher = {
  name: 'liz',
  favoriteLanguage : 'English',
  speak : alert('Learn hard!')
}

12) What are the property-names and values of the object you just created?
we have 2 strings and 1 function

13) Why would you use git?
Git is a remote repository, it helps for me to store version and collaborate

14) What is the difference between `git add`,`git commit` and `git push` ?

git add : create a repository
git commit : commit the work / create a new final version
git push : it upload the commited version on the cloud Git

### Clone this repository and add a file with the answers to these questions to the directory of your class. Name it 'AnswersFromYourName.md' Make sure to add a pull request and make some class mates review it!
