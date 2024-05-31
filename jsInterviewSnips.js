// statement 1
setTimeout(() => console.log(1));

// statement 2
Promise.resolve().then(() => console.log(2));

// statement 3
Promise.resolve().then(() => setTimeout(() => console.log(3)));

// statement 4
new Promise(() => console.log(4));

// statement 5
setTimeout(() => console.log(5));

// microTaskQueue (m1) -> promise.then, callbacks, observers
// macroTaskQueue (m2) -> setTimeout, setIntervals etc

// m1 > m2

// m1 -> statement2, statement3, 
// m2 -> statement1, statement5

// - statement4 will be executed first with the current thread
// - statement2 from m1 will execute then printing 
// - statement3 from m1 will now exceute and it will put this task to m2 because of
// setTimeout (m2 -> statement1,5,3) (m1 -> empty)
// - statement1 from m2 
// - statement5 from m2
// - statement3 from m2

// thus o/p > 4 2 1 5 3
