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

## slice ()

- It does not mutates the array
- Mainly used for copying the array
- array.slice(start index, end index) here end index value does not inlcude.

## splice()

- It mutates the array.
- Splice it mainly to used delete the value.
- array.splice(start index, count)

## forEach()

- Executes a callback function once for each element.

Array forEach arguments:
(value, index, array)

Map data structure forEach arguments:
(value, key, map)

Set forEach arguments:
(value, value, set)

Note:
In Sets there is no key, so value is repeated twice.

## map()

- Transforms each element of an array.
- Returns a new array with the transformed values.
- Does NOT modify the original array.

Arguments:
(value, index, array)

Example:
const arr = [1, 2, 3];
const result = arr.map(num => num \* 2);

Output: [2, 4, 6]

## filter()

- Creates a new array with elements that pass a condition.
- The callback must return true or false.

Arguments:
(value, index, array)

Example:
const arr = [1, 2, 3];

const result = arr.filter(num => num > 1);

Output: [2, 3]

## reduce()

- Reduces an array into a single value.

Arguments:
(accumulator, currentValue, index, array)

- accumulator stores the result from the previous iteration.
- The second argument of reduce is the initial value.

Example:
const arr = [1, 2, 3];

const maximumValue = arr.reduce((acc, curr) => {
return acc > curr ? acc : curr;
}, arr[0]);

Output: 3

## map() vs filter() vs reduce()

map → transform
filter → select
reduce → combine

## find()

- Return the first element in the array that pass a condition.
- It returns only one sigle element

## filter() vs find()

filter -> returns an array.
find -> retunrs a single element

## findIndex()

- Return the index value of an element.
- Example: const a = [1, 2, 3] - a.find((i) => i > 1) result: 2
