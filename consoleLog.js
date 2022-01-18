// const util = require('util');
// const myObject = { a: 'a', b: { c: 'c', d: { e: 'e', f: { g: 'g', h: { i: 'i', j: function () { } } } } } };

// console.log(myObject);
// console.log(JSON.stringify(myObject));
// console.log(util.inspect(myObject, { showHidden: false, depth: null, colors: true }));
// // alternative shortcut
// // console.log(util.inspect(myObject, false, null, true /* enable colors */));
// console.log(util.inspect({x: 10, y: 20}) == '{ x: 10, y: 20 }')

const myName = { firstName: "Oluwatobi", lastName: "Sofela" };
const bio = { ...myName };
console.log(bio);