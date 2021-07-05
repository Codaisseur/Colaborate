1. We use a loop to execute a set of statements for 'n' number of times based
on  a condition.
//for loop
for (favFood = 0, favFood < 10, favFood ++) {
  console.log('Watermelon');
}
//while loop
var favFood = 0;
  while(favFood < 10) {
    console.log('Watermelon');
    favFood++;
  }
  2. print the results to see if it's correct
  3. Arrays are a collection of data elements. They have a finite length. They can hold any data type - strings, numbers, booleans, arrays, objects. Each element has an index starting at 0. An ordered collection the elements are arranged in a particular sequence.
  4. var names = ['Neenu', 'Preeti'];
  names.forEach(function(name){
    console.log(`${name}`);
    })
5. An array is to store data whereas loop is to iterate over some statements.
Array is a collection whereas loop is not.
we use array to store a finite collection of elements together under a name and index.We use loop to execute a block of statements many times depending on a condition.
6. We are declaring and defining a function with name multiply.At the end we are calling the  function with some values and it returns 6.
7. console.log(arguments[0]);
console.log(arguments[1]);
8. Scope indicates where and when a variable can be used. Global scope indicates the variable can be accessed anywhere in the program. Local is specific to the block it is defined in.Local variable goes out of scope if we call it outside the area in which it is defined.
9. A: yes B: yes -var name is global
C: yes D: no - because the variable is local and cannot be called at place D as it goes out of scope there
10. We use an object to hold related information together under a name.It makes the code more organised. Object has a property and value seperated by a colon.
It holds attributes and functions .

11. var teacher={
   name:'preeti',
   favoriteLanguage:'javascript',
   teach:function(){
     console.log('javascript is used to make our page more interactive')
    }
   }
12. Property names: name, favoriteLanguage, teach
    Values: 'preeti', 'javascript', function(){
      console.log('javascript is used to make our page more interactive')
     }
13. It's a version control system(local).We use it to store our files in a repository. It helps to track the changes to our files and see the  history.
We can add and commit files in git.
14. Git add is to add certain or all (.) files that needs to be commited .Through commit , we are putting the files to the repository.We can commit the files that are only added.Without adding the files, it is not possible to commit it.git push is to push the files in git(our local repository) to remote repository(github).It is somewhat like, we are creating a backup of our local repository.
