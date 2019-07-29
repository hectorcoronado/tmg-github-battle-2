we can figure out what `this` is referencing following these rules:

1. Look to where the function was invoked.

2. Is there an object to the left of the dot? If so, that’s what the “this” keyword is referencing. If not, continue to #3.

3. Was the function invoked with “call”, “apply”, or “bind”? If so, it’ll explicitly state what the “this” keyword is referencing. If not, continue to #4.

4. Was the function invoked using the “new” keyword? If so, the “this” keyword is referencing the newly created object that was made by the JavaScript interpreter. If not, continue to #5.

5. Is “this” inside of an arrow function? If so, its reference may be found lexically in the enclosing (parent) scope. If not, continue to #6.

6. Are you in “strict mode”? If yes, the “this” keyword is undefined. If not, continue to #7.

7. JavaScript is weird. “this” is referencing the “window” object.