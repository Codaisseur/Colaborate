# Welcome

Welcome to this repository where you can get a first glance of collaborating on GitHub! Please answer the following questions:

# Recap

1) Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.

Answer: We use loops to run a function several times without needing to actually write down the whole function many times.
```
for (i=0;i<10;i++) {
  console.log('steak')
}
```

```
i=0
while (i<10) {
  console.log('steak')
  i++
}
```

2) How do I try out whether my loop is working?

Answer: I can type it on terminal or chrome's console to see if it works or throws an error.

3) What are arrays? What is an ordered collection?

Answer: Array is a data type which can hold multiple data inside it like numbers or strings. Ordered collection means the data inside the array always stays in the same order.

4) Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).

Answer:

```
let myTeam = ['Max', 'Arjen' , 'Christophe']
let teamMembers
myTeam.forEach(function(member) {
  teamMembers += `${member}`
})
console.log(teamMembers)
```

5) What is the difference between a loop and an array? Why would you use either of them?.

Answer: Loop is a method that enables to run a function as long as some condition holds. Array is a collection of multiple different data. We use loops to iterate a function as many as we like or as long as a condition holds. We use arrays to keep related data in the same place (like the members of a football team) , so that we can iterate over that collection of data with functions.

6) What is happening here?

```
var multiply = function(a, b) {

  return a * b;
};

multiply(2, 3)
```
Answer: We define a function called 'multiply' which takes 2 arguments 'a' and 'b' and returns the multiplication of them. In the last line, we call the function for numbers 2 and 3.

7) How could we log the arguments of the code above?

Answer: By adding the following code to the 53th line.
```
console.log(arguments)
```
8) What is ‘scope’?

Answer: Variables declared in a function can work only in that function.

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

Answer: Object allows us to hold different properties of that object in one place and recall that properties with associated keys. For instance, Human object can have properties like name, last name, age and so on. We can keep them in one place and reach them when needed.

11) Create an object ‘teacher', that stores the name,
favorite language and a teach-function of that teacher that will alert you with some useful knowledge.
```
let teacher = {
  name: "Arjen",
  favorite_language: "Javascript",
  teach: function() {
    window.alert('you should study more man');
  }
};
```

12) What are the property-names and values of the object you just created?

Answer: property-names are 'name' , 'favorite_language' and 'teach'.
Values of the object are 'Arjen', 'Javascript' and 'function() {window.alert('you should study more man');}.
}'

13) Why would you use git?

Answer: for version controlling or keeping track of changes in your code as well as collaborating with other developers so that different people can work on different parts of the project and combine their code in a single master file only after they're sure their code does what it's intended to do.  

14) What is the difference between `git add`,`git commit` and `git push` ?

Answer: 'git add' adds your change to a temporary place so that there's a change waiting to be committed. 'git commit' commits that change locally to the original project. 'git push' pushes the project to the remote. 

### Clone this repository and add a file with the answers to these questions to the directory of your class. Name it 'AnswersFromYourName.md' Make sure to add a pull request and make some class mates review it!
