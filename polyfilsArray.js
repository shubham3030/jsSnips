/* Polyfills - backward compatibilty for older browsers for the new ES6+ features which they dont support natively */

/**
 * Polyfil for map() method
 */

function double(x) {
    return x * 2;
}

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(double);
console.log('Current functionality for map',newArr);


Array.prototype.MyMapFunction = function(callback) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    };
    return newArr;
};

console.log('Polyfill functionality for map', arr.MyMapFunction(double));

/**
 * Polyfill for filter() method
 */

function isEven(x) {
    return x % 2 === 0;
}

console.log('Current functionality for filter', arr.filter(isEven));

Array.prototype.MyFilterFunction = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArray.push(this[i]);
        }   
    }
    return newArray;
}

console.log('Polyfill functionality for filter', arr.MyFilterFunction(isEven));

/** 
 * Polyfill for reduce() method 
 * this method takes a callback function and an initial value as arguments
 */

function sum(acc, curr) {
    return acc + curr;
}

console.log('Current functionality for reduce' , arr.reduce(sum, 0));

Array.prototype.MyReduceFunction = function(callback, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = callback(acc, this[i]);
    }
    return acc;
}

console.log('Polyfill functionality for reduce', arr.MyReduceFunction(sum, 0));

/**
 * Polyfill for find() method
 * 
 * this method returns the first element in the array that satisfies the provided testing function
 * if no element satisfies the testing function, undefined is returned
 */

function isGreaterThanThree(x) {
    return x > 3;
}

console.log('Current functionality for find', arr.find(isGreaterThanThree));

Array.prototype.MyFindFunction = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
    return undefined;
}

console.log('Polyfill functionality for find', arr.MyFindFunction(isGreaterThanThree));

/**
 * Polyfill for findIndex() method
 * 
 * this method returns the index of the first element in the array that satisfies the provided testing function
 * if no element satisfies the testing function, -1 is returned
 */

function isGreaterThanFour(x) {
    return x > 4;
}

console.log('Current functionality for findIndex', arr.findIndex(isGreaterThanFour));

Array.prototype.MyFindIndexFunction = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return i;
        }
    }
    return -1;
}

console.log('Polyfill functionality for findIndex', arr.MyFindIndexFunction(isGreaterThanFour));


/**
 * Polyfill for forEach() method
 * 
 * this method executes a provided function once for each array element
 */

const printElement = (element) => {
    console.log(element);
};

arr.forEach(printElement);

Array.prototype.MyForEachFunction = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

arr.MyForEachFunction(printElement);

/**
 * Polyfill for some() method
 * 
 * this method tests whether at least one element in the array passes the test implemented by the provided function
 */

function isGreaterThanFive(x) {
    return x > 5;
}

console.log('Current functionality for some', arr.some(isGreaterThanFive));

Array.prototype.MySomeFunction = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}

console.log('Polyfill functionality for some', arr.MySomeFunction(isGreaterThanFive));

/**
 * Polyfill for every() method
 * 
 * this method tests whether all elements in the array pass the test implemented by the provided function
 */

function isGreaterThanZero(x) {
    return x > 0;
}

console.log('Current functionality for every', arr.every(isGreaterThanZero));

Array.prototype.MyEveryFunction = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
}

console.log('Polyfill functionality for every', arr.MyEveryFunction(isGreaterThanZero));
