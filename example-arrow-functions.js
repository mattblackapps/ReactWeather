var names = ['Matt', 'Bojangle', 'RoxyFart'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrow', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Matt'));

// var person = {
//   name: 'Matt',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

function add (a,b) {
  return a + b;
}

var addStatement = (a,b) => {
  return a + b;
};

var addExpression = (a,b) => a + b;

console.log(addStatement(1,2));
console.log(addExpression(3,-4));
