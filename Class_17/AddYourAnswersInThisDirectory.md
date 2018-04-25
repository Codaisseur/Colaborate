# Welcome

Welcome to this repository where you can get a first glance of collaborating on GitHub! Please answer the following questions:

# Recap

1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.

 * repeat some code a as many times as it needs to run.
```
for (index = 0 ; index < 10; index++ ) {
console.log(`My favorite food is: pizza`);
};

var index = 0

while ( index < 10) {
  console.log(`My favorite food is: pizza`);
  index++;
};
```

2) How do I try out whether my loop is working?

* you can try it form the consol or put it in node and run it.

3) What are arrays? What is an ordered collection?

* an array is a collection of data types.
* Ordered collection means that elements will always stay on * * their location unless you change it on purpose.

4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).
```
var names =  ['Anna' , 'John'];

var index = 0

while (index < names.length){
console.log(`${index}: ${names[index]}`);
index += 1;
};
```

5) What is the difference between a loop and an array? Why would you use either of them?.

* a loop is a method to iterate over data and an array is a collection of data.

* an a loop if you need to run a bash of code multiple times and an array if you need collect "simalar" data.

6) What is happening here?

```
var multiply = function(a, b) {
  return a * b; 
};

multiply(2, 3)
```
it's a function that mutiplies the input a and b. In this instance 2 and 3
it will return 6

7) How could we log the arguments of the code above?
```
var multiply = function() {
    console.log(arguments);
    return arguments[0] * arguments[1];
};

multiply(2, 3);
```

8) What is ‘scope’?

* scope is the set of variables, objects and functions you have access to.
* Scope refers to the current context of your code. Scopes can be global or local.

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
in the first instance you can use it in both places because it is a global scope.
The second instance is a local scope and it can only be used locally aka inside the function.

10) Why would you use an object?

* to group data and behavior

11) Create an object ‘teacher', that stores the name, 
favorite language and a teach-function of that teacher that will alert you with some useful knowledge.

```
var teacher = {
name : 'Arno';
favoriteLanguage : 'JavaScript';
teach: function() {
alert(`useful knowledge!!`)
};
}
```

12) What are the property-names and values of the object you just created?

> property-names = value
>
> teacher.name = 'Arno'
> teacher.favoriteLanguage = 'JavaScript'
> teacher.teach = `useful knowledge!!`

13) Why would you use git? 

* to collaborate and keep version control.
* saving/ protecting your code

14) What is the difference between `git add`,`git commit` and `git push` ?

* git add : add file to local repository
* git commit : store all changes in git
* git push : push it to (store it) to github (remote)

*Thanks to Anna and John from Class 16!*