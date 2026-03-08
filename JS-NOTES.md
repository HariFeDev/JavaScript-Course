### A Closer Look at Functions

## call()

- Used to manually set `this`
- Immediately invokes the function
- Syntax: functionName.call(thisArg, arg1, arg2)

Example:
greet.call(person, "Hi")

Important:
First argument = value of `this`

## apply()

- Same as call()
- Difference: arguments are passed as an array
- Syntax: functionName.apply(thisArg, [argsArray])

Example:
greet.apply(person, ["Hi"])

Modern JS:
Instead of apply(), we can use:
greet.call(person, ...array)

## bind()

- Mention the `this` manually
- Difference: It will not automatically call the function and returns new function
- To set default parameters like partial application
- Once we fixed `this` in bind() we cannot change that using call()

## Closure

- Function remembers outer scope variables
- Works even after outer function finished
- Happens because of lexical scope

Example: counter functions, callbacks

### Working With Arrays

## splic()

- It mutates the array.
- Splice it mainly to used delete the value.
- array.splice(start index, count)

## forEach()

- Executes a callback function once for each element.

Array forEach arguments:
(value, index, array)

Map forEach arguments:
(value, key, map)

Set forEach arguments:
(value, value, set)

Note:
In Sets there is no key, so value is repeated twice.
