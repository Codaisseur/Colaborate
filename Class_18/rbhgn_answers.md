# Welcome

Welcome to this repository where you can get a first glance of collaborating on GitHub! Please answer the following questions:

# Recap

1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.

-To loop through Array's or to avoid repeating code.

```
for (let x = 0; x < 10; x++) {
  console.log("your favorite food");
}
```

```
let x = 0;
while (x < 10) {
  console.log("your favorite food");
  x++;
}
```

2) How do I try out whether my loop is working?

-Console log it

3) What are arrays? What is an ordered collection?

-Arrays is a collection of variables/objects/arrays/Functions

-An ordered collection has an index

4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).

```
const team = ["Rob", "Fabian", "Jelena", "Sophie"]

for each (let member in team) {
  console.log(member);
}
```

5) What is the difference between a loop and an array? Why would you use either of them?.

-An array is a collection and a loop is an easy way to go through an array to do something with individual elements of an array.

6) What is happening here?

```
var multiply = function(a, b) {
  return a * b;
};

multiply(2, 3)
```
-A function is being called where 2 gets multiplied by 3.


7) How could we log the arguments of the code above?
  console.log(a,b);

8) What is ‘scope’?
 The variables and functions you have access to.

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
Yes, Yes, No & Yes

10) Why would you use an object?
To store elements without an index

11) Create an object ‘teacher', that stores the name,
favorite language and a teach-function of that teacher that will alert you with some useful knowledge.

const teacher = {
  name: "Teacher",
  favoriteLanguage : "Dutch",
  teachFunction: function() {
    console.log("Some useful knowledge")
  }
}

12) What are the property-names and values of the object you just created?

name = Teacher
favoriteLanguage = Dutch
teachFunction = function that calls console.log

13) Why would you use git?

To keep track of changes and to collaborate

14) What is the difference between `git add`,`git commit` and `git push` ?

Git add - Adds a file/files to repository
Git Commit - Saves changes made to file/files
Git Push - Pushes commits to GitHub

### Clone this repository and add a file with the answers to these questions to the directory of your class. Name it 'AnswersFromYourName.md' Make sure to add a pull request and make some class mates review it!
