// script1.js
var arry = [[1,2],[3,4],[5,6,7,8],[9,10]];
console.log(arry);
var flat = arry.reduce(function(prev,curr) {
  return prev.concat(curr);
});
console.log(flat);
