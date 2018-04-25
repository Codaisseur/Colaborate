ecap

1) Why would you use a loop? : to repeat, running the same set of instructions multiple times


Write me a for & a while loop that prints your favorite food 10 times.:

for (var i=0; i<10; i++) {
  console.log("banana!!");
}

var j=0;
while (true) {
  if (9 < j) {
    break;
  }
  console.log("banana!");
  j++;
}

2) How do I try out whether my loop is working?

try, use google chrome ctrl+command+j
or use node


3) What are arrays?: arrays are data structure, they can store multiple kind of data.
What is an ordered collection? : ordered by index.



4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).
var we = ['fong','zoltan']

we.forEach(
  function(a){
    console.log(a)

    })


5) What is the difference between a loop and an array?: loop is a control structure and array is a datatype.

 Why would you use either of them?.

loop are use for control the program flow.
array are use for store the data.


6) What is happening here?

```
var multiply = function(a, b) {
  return a * b;
};

multiply(2, 3)
```

multiply is a function that accepts 2 arguments
and will return the result of multiplying them

7) How could we log the arguments of the code above?

console.log(a, b)

or

console.log(arguments)
this will return an object with the args


8) What is ‘scope’?
there are two different
local scope = the var define in the local scope can only use in the local.
global scope = you can use them everywere.

9) Can I use my vars at the following places?

```
var name = Rembert

//Place A

var codaisseur = function() {
  //Place B
}
```
A yes
B yes

```
var codaisseur = function() {
  var name = Rembert
  //Place C
}

//Place D
```

C yes
D no

10) Why would you use an object?

to create a data structure with its own variables & methods


11) Create an object ‘teacher', that stores the name,
favorite language and a teach-function of that teacher that will alert you with some useful knowledge.

var teacher = {
  name: 'Bob',
  favLang: 'Javascript'
  teach() {
    alert('Learn, dammit!')
  }
}

12) What are the property-names and values of the object you just created?

name: string
favLang: storing

13) Why would you use git?

14) What is the difference between `git add`,`git commit` and `git push` ?
