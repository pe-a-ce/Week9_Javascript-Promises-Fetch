/*
Javascript is a single-threaded environment, so we can only execute one piece of code at a time.

Synchronous code is easy to write and reason about but is less performant.

Thanks to callbacks and Event Loop, we can have asynchronous programming in JavaScript.

Although asynchronous code can be difficult to reason about and therefore harder to write, it eliminates code blocking and is very performant.

Callbacks can result in callback hell
*/

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
// The setTimeout is provided to us by the Web API: it lets us delay tasks without blocking the main thread.
const baz = () => console.log("Third");

bar();
foo();
baz();