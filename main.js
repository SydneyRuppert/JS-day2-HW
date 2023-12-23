//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function fav_foods(){
    Object.entries(person3).forEach(
        ([key, value]) => console.log(key, value)
);
}
fav_foods()
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name;
    this.age = age;
    

    // Use an arrow to create the printInfo method
    this.printInfo = ()=>{
        console.log("My name is " + this.name + "and I am " + this.age + " years old today.");
    };
    // Create another arrow function for the addAge method that takes a single parameter
    this.addOne =()=>{
        return this.age +=1;
    };
    //add by 3 years
    this.addAge = (years) =>{
        this.age+=years
    };
}

let person1 = new Person('Sydney',25);
let person2 = new Person('Reece',27);

person1.printInfo()
person2.printInfo()
person1.addAge(3)
person1.printInfo()


// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const isLength = (String) =>{
    return new Promise((resolve,reject) => {
        if (String.length>=10){
            resolve(String)
        }else{
            reject(false)
        }
    })
}
isLength('The best days are rainy ones because you get to bundle up in blankets and light candles.')
.then((result)=>{
    console.log('Big word')
})
.catch((error)=>{
    console.log('Small Number')
})
isLength('The best days are rainy ones.')
.then((result)=>{
    console.log('Big word')
})
.catch((error)=>{
    console.log('Small Number')
})


// CodeWars problems and anwsers

//The link:
//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/solutions/javascript?filter=me&sort=best_practice&invalids=false

//The question:
//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.

//The anwser:
// const areaOrPerimeter = function(l , w) {
//     if (l == w) {return l ** 2}
//     else {return 2 * (l + w)}
//   };

//THIS IS THE PROBLEM I DID IN PYTHON AND THEN JAVASCRIPT-I will add the python solution first and then the javascript

//PYTHON
//The link:
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/python?filter=me&sort=best_practice&invalids=false


//The question:
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//The anwser:

// def even_or_odd(number):
//     if number % 2 == 0:
//         return('Even')
//     else:
//         return('Odd')
        
// even_or_odd(4)


//JS
//The link:
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/solutions/javascript?filter=me&sort=best_practice&invalids=false


//The question:
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.



//The anwser:
// function evenOrOdd(number) {
//     if(number % 2 ==0){
//       return`Even`
//     }else{
//       return`Odd`
//     }
//   }


