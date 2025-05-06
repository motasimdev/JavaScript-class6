// screen one

let playerOneNameInput = document.querySelector(".playerOneNameInput");

let startGameBtn = document.querySelector(".startGameBtn");

let screenOneError = document.querySelector(".screenOneError");

let screenOne = document.querySelector("screenOne");

let heading = document.querySelector(".heading");
// screen one

// screen two
let screenTwo = document.querySelector(".screenTwo");
// screen two

startGameBtn.addEventListener("click", function () {
  if (playerOneNameInput.value == "") {
    screenOneError.style.display = "block";
  } 
  else {
    screenTwo.style.display = "block";  
    screenOne.style.display = "none";
  }
});

// function info(name, age) {

//     console.log("Hello my name is " + name + " my age is " + age);

// }
// info("Motasim", 25)
// info("rafi", 20)
// info("talid", 23)

// nameless function

// let x = function (){
//     console.log("nameless function");

// }
// x()

// let y =()=>{
//     console.log("Arrow function");

// }
// y()

// let z = ["a", "b", "c"]

// z.map(item=>{
//     console.log(item);

// })

// let info = {
//     name : "motasim",
//     age : 25,
//     area : function () {
//         console.log("noakhali");

//     }
// }
// info.area()
