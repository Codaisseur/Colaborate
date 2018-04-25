1. Loops are used to perform a certain set of operations recursively. An example of a 'For' and 'While' loops are as follows:

    var favoriteFood = 'Pizza';
    for(var i=1;i<11;i++){
      console.log(favoriteFood);
    }


  var counter = 10;

  while (counter >0) {
    console.log(favoriteFood);
    counter--;
    }


2. We run the program in terminal and check console for logs.
   Furthermore, to troubleshoot the issues we can output different variables to the console as well.

3. Arrays are ordered collection of any datatype(s). An array may also be nested. i.e. an array inside an array. By ordered collection,
   It means that the sequence of the items inside an array are asigned a index position which acts as a primary key for the particular item.

4. var teamMembers=['Atharv','Willem'];
   teamMembers.forEach(function(member){console.log(member);});

5. A loop is a conditional, repeated execution of a set of functions or commands.
   An array is a set of variables which are used to store data, not functions or commands.

6. An anonymous function has been assigned to the variable 'multiply' that accepts 2 arguments and returns the product.
   Hence, Whenever the function multiply(a,b) is called, the product of a and b (a*b) is stored inside the variable 'multiply'
   and can be logged to the console for reference.

7. Here is how we log the arguments of the code:

    var multiply = function(a, b) {
      console.log('arguments:',a,b);
      return a * b;
    };

    multiply(2, 3)

8. A scope can be understood as accessibility of a defined variable from different areas of the program.
   For example, a variable defined inside a function can not be accessed from outside the function.
   And, a variable defined explicitly can be used anywhere in the program provided that the declaration is done before referring
   to it.

9. Place A : NO
   Place B : YES
   Place C : YES
   Place D : NO

10. We use an object to store the properties of an entity in a single variable. For example, the object 'Student' below
    holds various properties like Name, Age, Marks, Attendance etc.

    var student = {
    name: 'Atharv',
    age: 25,
    Marks: 100,
    Attendance: 99
    }

11. var teacher = {
    name: 'Mimi',
    favoriteLanguage: 'Dutch',
    teach: function(){alert('knowledge is wisdom!');}
    }

12. Property Names                 |     Values
       Name                              Mimi
  favoriteLanguage                       Dutch
       teach             function(){alert('knowledge is wisdom!');}


13. We use git to keep a track of the changes in our project. It also helps multiple developers to collaborate and work
    on the same project without interfering with each other. It helps us to perform the version control and allows us to
    quickly switch back or review the previous versions of our programs.

14. 'Git add' adds the file to the bucket ready to be saved after the changes are done.
    'Git commit' saves the changes along with a comment that acts as a title of the changes made.
    'Git push' allows us to replicate the changes from our local git to remote git.
