// Testas
/*
Komentarai egzistuoja kaip kintamieji ar komentarai
console.log("Hello Consolelog")
*/


let stringType = "string";
let boolValue = true;
let numberArray = [20, 10, 30, 70];

let sum = 0;

for (let i =0; i < numberArray.length; i++){
    const element = numberArray[i];
    sum = sum + element;
}

console.log(sum)


// let numberString = prompt("Please, enter a number");

// let number = parseInt(numberString);



// if (number <= 10){
//     console.log("number is 10");

// }else if(number >= 10 && number <= 20){

//     console.log("number is between 10 and 20");
// }
// else if(number > 20 && number <= 20){

//     console.log("number is between  and ");
// }
// else {
//     console.log("number is not 10");
// }


// switch (true) {
//     case (count == 2):
//         document.write("hi");
//         break;
//     case (count > 3):
//         document.write("bye");
//         // No break here; just fall through.
//     case (count >= 4):
//         document.write("lol");
//         break;
// }