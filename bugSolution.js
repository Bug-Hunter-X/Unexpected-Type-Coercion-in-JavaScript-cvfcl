function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Inputs must be numbers";
  }
  return a + b;
}

console.log(foo(1, "1")); // Output: Error: Inputs must be numbers
console.log(foo(1, 1)); // Output: 2

//Alternative solution using Number() for type conversion
function foo2(a,b){
    return Number(a) + Number(b);
}
console.log(foo2(1, "1")); // Output: 2
console.log(foo2(1,1)); // Output: 2