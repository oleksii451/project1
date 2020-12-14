"use strict";

/*const num = 12.2;

console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));

function first() {
    setTimeout(function() {
        console.log(1);
    
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`i am learning ${lang}`);
    callback();
}

function done() {
    console.log('i completed this lesson');
}

learnJS('JS', done);

//const obj = new Object();
const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colours: {
        border: 'black',
        bg: 'red',
    }
};

console.log(options.name);
console.log(options['colours']["border"]);

delete options.name;

console.log(options);
let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`svoystvo ${i} has value ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`svoystvo ${key} has value ${options[key]}`);
    counter++;
    }
}

console.log(counter);

console.log(Object.keys(options).length);

const {border, bg} = options.colours;
console.log(border);