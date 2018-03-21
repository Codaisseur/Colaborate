/*Why would you use a loop? Write me a for & a while loop that prints your favorite food 10 times.

Efficiency, to iterate over a block of code without rewrite*/

var favFood = ["Pizza", "Burgers", "Penne al salmone", "Cheese", "Gouda Cheese", "Pepperoni Pizza", "Lasagna"]

for (var count = 0; count < 10; count++){
    console.log(favFood[0]);
}
var i = 0;
while (i< 10) {
    console.log(favFood[0]);
    i++;
}

/*

2.How do I try out whether my loop is working?

Open terminal, find right directory and run the file on node

3. What are arrays? What is an ordered collection?

An ordered collection of elements(any data type), which means a sequence of data with an index which can be accessed.

4. Write me an array with the names of your team and iterate over them, so all names will be printed out (using for each).*/

var team = ["Lavinia", "Chris", "Lisa", "Mark", "Mimi"]

for (var j = 0; j < team.length; j++) {
    console.log(team[j]);
}

/*
5. What is the difference between a loop and an array? Why would you use either of them?.

An array is there to store data, whereas the loop is there to do something with the data...over and over again.


6. What is happening here? */

var multiply = function(a, b) {
  return a * b;
};

multiply(2, 3)
/*
An anonymous function is stored in a variable, and by passing two arguments, the function will multiply those two values.

7. How could we log the arguments of the code above?

By using console log, either inside the function or by calling the function within the console.log: console.log(multiply(2, 3))

8. What is ‘scope’?

The scope of a variable refers to the code's context where the variable can be accessed.

9. Can I use my vars at the following places?

var name = Rembert

//Place A   ---YES

var codaisseur = function() {
  //Place B     ---YES
}
var codaisseur = function() {
  var name = Rembert
  //Place C     ---THE LOCAL VARIABLE WILL TAKE PRECEDENCE OVER THE GLOBAL ONE
}

//Place D   ---YES


10. Why would you use an object?

To group data that refers to specific properties of the object. You can access the specific properties of the object.


11. Create an object ‘teacher', that stores the name, favorite language and a teach-function of that teacher that will alert you with some useful knowledge.
*/

var teacher = {
    name : 'Arno',
    favoriteLanguage : 'Ruby',
    teach : function(){
        console.log('RTFM');
    }
}

teacher.teach();

/*
12. What are the property-names and values of the object you just created?

Property names: name, favoriteLanguage, teach
Values: Arno, Ruby, anonymous function

13. Why would you use git?

For version control and to collaborate

14. What is the difference between git add,git commit and git push ?

git add: adds file
git commit: commits the changes made on that file
git push: push the file to the remote

*/
