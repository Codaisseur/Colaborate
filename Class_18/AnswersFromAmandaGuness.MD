# Welcome

Amanda Guness

Welcome to this repository where you can get a first glance of collaborating on GitHub! Please answer the following questions:

# Recap

1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.

You can write a loop to iterate over multiple things, for instance an two arrays.

-

2) How do I try out whether my loop is working?

You run it and use console.log to see the result printed to the console.

3) What are arrays? What is an ordered collection?

An array is a collection of strings, numbers and or other types between [].

4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).

teamMemberList = ['Aryuna', 'someteammember', 'Amanda']

-

5) What is the difference between a loop and an array? Why would you use either of them?.

-A loop is a mechanism that repeats itself an an array is a collection of things.
-You can use a loop to repeat a proces or iterate over something.
-To work take actions on things in bulk you can collect them in an array.

6) What is happening here?
-a variable declared multiply is set to a function that takes two arguments a and b.
-the function returns a multiplied by b
-on the bottom line the function is called and the arguments a and b have 2 and 3 filled in to work with.

```
var multiply = function(a, b) {
  console.log(function(a, b);
  return a * b;
};

multiply(2, 3)
```

7) How could we log the arguments of the code above?

-To see the arguments logged you could add a console.log in the function that shows you the entered values for the agruments.  

8) What is ‘scope’?

-Scope could be explained like the reach a certain piece code has to other parts of your code. Global scope is accessable everywhere in your code but blockscope is is confined to the block it is written in and will not mess with other parts of the code that for instance might have the same variable names or conflicting rules.

9) Can I use my vars at the following places?
-A yes
-B yes
-C yes
-D yes

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

-To store properties in it and use it throughout the program.

11) Create an object ‘teacher', that stores the name,
favorite language and a teach-function of that teacher that will alert you with some useful knowledge.

var teacher = {
name: Arien,
favoriteLanguage: 'language',
teachFunction: 'function'};

12) What are the property-names and values of the object you just created?

-property-names are: name / favoriteLanguage / teachFunction
-values are: Arien/ 'language' / function

13) Why would you use git?

-To commit changes and to make sure you can go back to previous versions of your code.
-Indirectly to collaborate as well.

14) What is the difference between `git add`,`git commit` and `git push` ?

-git add = adding
-git commit = committing a change to a branch
-git push = pushing your commit or commits to the 'cloud' github 

### Clone this repository and add a file with the answers to these questions to the directory of your class. Name it 'AnswersFromYourName.md' Make sure to add a pull request and make some class mates review it!
