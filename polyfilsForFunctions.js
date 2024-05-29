
/**
 * Polyfill for bind() method
 * 
 * this method creates a new function that, when called, has its this keyword set to the provided value
 */

const person = {
    name: 'John'
};

const person2 = {
    name: 'Jane'
};

function greet(greeting, randomText = '') {
    console.log(greeting, this.name, randomText);
}

const greetPerson = greet.bind(person, 'Hello');
greetPerson();

const greetPerson2 = greet.bind(person2, 'Hi');
greetPerson2();

Function.prototype.MyBindFunction = function(context, ...args) {
    const fn = this;
    return function(...newArgs) {
        fn.apply(context, [...args, ...newArgs]);
    }
}

const greetPerson3 = greet.MyBindFunction(person, 'Hey');
greetPerson3();

const greetPerson4 = greet.MyBindFunction(person2, 'Hola');
greetPerson4('how are you?');


/**
 * Polyfill for call() method
 * 
 * this method calls a function with a given this value and arguments provided individually
 * function.call(objectReference, ...arguments)
 */

greet.call(person, 'Bonjour');

Function.prototype.MyCallFunction = function(context, ...args) {
    const fn = this;
    context.fn = fn; // Addtional property to the context object
    context.fn(...args);
    delete context.fn; // Remove the additional property from the context object
}

greet.MyCallFunction(person, 'Bonjour');

/**
 * Polyfill for apply() method
 * 
 * this method calls a function with a given this value and arguments provided as an array
 * 
 * function.apply(objectReference, [arguments])
 */

greet.apply(person, ['Hola']);

Function.prototype.MyApplyFunction = function(context, args) {
    const fn = this;
    context.fn = fn;
    context.fn(...args);
    delete context.fn;
}

greet.MyApplyFunction(person, ['Hola']);
