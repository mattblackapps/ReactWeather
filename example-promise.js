// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback ('Jacksonville', function (err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     },1000)
//   });
// }
//
// getTempPromise ('Jacksonville').then(function (temp) {
//   console.log('promise success', temp)
// }, function (err) {
//   console.log('promise error', err);
// });

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    }
    reject('Invalid numbers.');
  });
}

addPromise(1,'a').then(function (num) {
  console.log('add success', num);
}, function (err) {
  console.log('add failed', err);
});
