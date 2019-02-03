/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: when "this" tries to bind to window (bad!)
* 2. Implicit Binding: when a function is called & the object on the left side of the dot get "this"; specifically for objects
* 3. Explicit binding: used to control within functions; when call or apply method is used, this is explicitly defined
* 4. New Binding: applies "this" binding to constuctor function; refers to object that is created & returned by constructor function 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function pickColor(color) {
    console.log(this);
    return color;
  }
  pickColor("pink");

// created a window message- works!


// Principle 2

// code example for Implicit Binding

const cats = {
    name: "Seyyr",
    food: "tuna",
    toy: "ball",
    play: function() {
        console.log(`${this.name} loves to play ${this.toy}`)
    }
}

cats.play();

//works!

// Principle 3

// code example for New Binding
function sayName(name) {
    this.name = name;
    name = 'Mykol';
    this.lastName = 'Benning';
    this.speak = function() {
      console.log(`Hello, my name is ${this.name} ${this.lastName}`)
  }
  }
  
  const Mykol = new sayName('Mykol');
  
  
  Mykol.speak();

//works!

// Principle 4

// code example for Explicit Binding

//playing with .call//
const cat = {
    name: 'Stripes',
  }
  
  const traits = ['cuddly', 'sweet', 'rude'];
  
  
  function personality(){
    console.log(`${this.name} is ${traits}`);
  }
  
  //personality.call(cat); 
//works//
  
  //playing with .apply// 

  const chat = {
    name: 'Tiger',
  }
  
  const char1 = ['fierce'];
  const char2 = ['loyal'];
  const char3 = ['fast'];
  
  
  function personality(){
    console.log(`${this.name} is ${char1}`);

   }    
  personality.apply(chat);
  //works//
 

  

  //testing out bind// 
  // const testingOutBind = personality.bind(cat);
  // }

  //works!//