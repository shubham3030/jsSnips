/**
 * Write a function which deep clones a object
 * Cases to handle -
 * 1) Object inside object
 * 2) Array inside object
 * 3) Array inside array
 * 4) Object inside array
 * 5) Primitive values
 */

function deepCloneObject(obj) {
    // Primitive values
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // Array inside object, Array inside array
    if (Array.isArray(obj)) {
        return obj.map(item => deepCloneObject(item));
    }

    // Object inside object, Object inside array
    const clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepCloneObject(obj[key]);;
        }
    }
    return clonedObj;
}

const originalObject = {
    name: 'Shubham',
    age: 26,
    hobbies: ['Coding', 'Traveling'],
    address: {
      city: 'Fazilka',
      zip: '152123',
      state: 'Punjab',
      addressLines: {
        line1: 'Street 1',
        line2: 'Street 2'
      }
    },
    friends: [
      {
        name: 'Rahul',
        age: 25,
        hobbies: ['Coding', 'Traveling'],
        address: {
          city: 'Fazilka',
          zip: '152123',
          state: 'Punjab',
          addressLines: {
            line1: 'Street 1',
            line2: 'Street 2'
          }
        }
      }
    ]
};

console.log(JSON.stringify(deepCloneObject(originalObject)));
