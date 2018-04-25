var i = 0;

while ( i < 10 ) {
  console.log(i, ' pizza');
  i++;
};

for (var i=0; i<10; i++) {
  console.log(i, ' pizza');
  i++;
};

var teacher = {
  name: 'Wouter',
  favorite_langue: 'JS',
  speak: function() {
    console.log(`You want to know this`)
  }
};

teacher.speak()