//q.1
// for loop
for (var i = 0; i < 10; i++) {
    console.log("pasta");
}
// while loop
var i = 1;
while ( i < 11) {
    console.log(i + " pasta");
    i++;
}

//q.2
//You can write a console log and check if the functions inside are working

//q.3
//Arrays are used to store multiple values in a single variable.
//An array is an ordered collection of elements.
//The elements can be any type e.g. numbers,strings, etc.

//q.4

var team = ["Juno","Tasos","Iuliia"];

team.forEach(function(name) {
   console.log(name);
});

//q.5
//Arrays are used to store values ,
//while a loop statement allows us to execute a statement or group of statements multiple times.

//q.6
//we have a function that takes 2 parameters and multiply them and returns the result

//q.7

var multiply = function(a, b) {

  var total =  a * b;
  console.log(total);
};

multiply(2, 3)

//q.8
//Scope determines the visibility of variables.

//q.9
// you can use it at places A,B and D

//q.10
//most often use the object data type, mostly for storing data and for creating your own custom methods and functions.

//q.11
var teacher = {
  name: "name",
  favLanguage: "JavaScript",
  teach: function(){
    alert("name is a great student!!!");
  }
};

//q.12
//names: name, favLanguage, teach()
// properties: "name", "Javascript", function() {alert("name is a great student!!!")}

//q.13
//Git is useful to collaborate and track changes in code. Code is always changing and it is an amazing idea to keep track of everything youve done

//q.14
// Git commit will initilize a repository called "Master"
// Git add will stage the change to the staging area
// Git push will push the changes to the repository from the staging area, completing the changes
