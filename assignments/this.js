/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: when "this" tries to bind to window (bad!)
* 2. Implicit Binding: when a function is called & the object on the left side of the dot get "this"; specifically for objects
* 3. Explicit binding: used to control within functions; when call or apply method is used, this is explicitly defined
* 4. New Binding: applies "this" binding to conrtuctor function; refers to object that is created & returned by constructor function 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

"use strict";
// Not sure what to put for this one


// Principle 2

// code example for Implicit Binding

const cats = {
    name: "Seyyr",
    food: "tuna",
    toy: "ball",
    play: function() {
        console.log(`${name} loves to play ${this.toy}`)
    }
}

cats.play();

// Principle 3

// code example for New Binding

function disneyChar(name) {
    this.greeter = name;
    this.greeter = greeter;
    this.greeting = "Whats the stich";
    this.speak = function() {
        console.log(`${this.greeter}, ${this.greeting}`)
    }
}

const Kim = {
    greeter: "Ron",
    greeting: "Whats the sitch",
    speak = function() {
        console.log(`${this.greeter}, ${this.greeting}`)
    }
}

Kim.speak();


// Principle 4

// code example for Explicit Binding

const car = {
    model: "tesla"
}

const carChar = ["navy", "sleek", "fast" ];

function drive(trait1, trait2, trait3) {
    console.log(`The ${this.car} is ${carChar}`);
}

drive.bind(car, ...carChar);
drive.apply(car, carChar);