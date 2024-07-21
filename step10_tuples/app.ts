/*  Tuple types have the advantage that you can accurately describe the type
of an array of mixed types  */


var tup: [number, string] = [3, 'usama'];

var tupSecondEle = tup[1];        // second element now has the type string

// console.log(tupSecondEle);


/* Typically an array contains zero to many objects of a single type. TypeScript
has special analysis around arrays which contain multiple types, and where 
the order in which they are indexed is important */


/* these are called tuples. Think of them as a way to connect some data, but
with less syntax than keyed objects. */


// You can create a tuple using JavaScript's array syntax

const failingResponse = ['Not Found', 404];

// but you will need to declare its type as a tuple

const passingResponse: [string, number] = ['{}', 200];

/* If you hover over the two variable names you can see the difference between
an array ( (string | number)[] ) and the tuples ( [string, number] ). */


/* As an array, the order is not important so an item at any index could be
either a string or a number. In the tuple the order and length are guarenteed. */

if(passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log(localInfo);
    
}

// This means TypeScript will provide the correct types at the right index, and
// even raise an error