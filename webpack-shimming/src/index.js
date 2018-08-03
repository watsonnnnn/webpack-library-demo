// import _ from 'lodash';
var o = require('./global.js');

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = join(['Hello', 'webpack'], ' ');

  console.log(this);

  return element;
}

console.log(this);
console.log(o);

document.body.appendChild(component());