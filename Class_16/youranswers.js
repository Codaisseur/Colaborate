var i = 0;

while (i < 10) {
  console.log('pasta');
  i++;
};

for(var i = 0; i < 10; i++ ) {
  console.log('pizza');
};

var names = ['bob', 'mary'];

names.forEach(function(name){
  console.log(name);
});

var teacher = {
  name: 'Mimi',
  favoriteLanguage: 'JS',
  teach: function(){
    console.log('Useful knowledge')
  }
};

teacher.teach();