function foo(a,b){return a+b;}
console.log(foo(1, "1")); //This will return "11" instead of 2 because of type coercion.
console.log(foo(1,1)); //This will return 2 as expected.