"use strict";

//let a = 5;
//let b = a;

//b = b + a;

//const obj = {
 //   a:1,
  //  b:2,
//}; 

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

//console.log(numbers);
//console.log(newNumbers);

const add = {
    i: 17,
    e: 20,
};

clone = Object.assign({}, add);

clone.e = 22222;

console.log(add);
console.log(clone);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
};

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newArray = [...array];

newArray[2]= 3333;
console.log(array);
console.log(newArray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};













/*const arr = [11,32,93,84,75];
arr.sort();
console.log(arr);

function compareNum(a, b) {
    return a-b;
}


/*arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside of array ${arr}`);
});

//arr.pop();
//arr.push(10);
//console.log(arr);

for (let i = 0; i< arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);

};*/

const str = prompt("", "");
const products = str.split(", ");
console.log(products.join(', '));

