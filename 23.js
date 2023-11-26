// function mathInterpreter(arr) {
//   let x = Number(arr[0]);
//   let y = arr[1];
//   let z = Number(arr[2]);

//   if (y === "+") {
//     return x + z;
//   } else if (y === "-") {
//     return x - z;
//   } else if (y === "/") {
//     return x / z;
//   } else if (y === "*") {
//     return x * z;
//   } else {
//     return "wrong input";
//   }
// }

// let userArr = prompt("Expression: ");
// userArr = userArr.split(" ");
// while (userArr.length > 3) {
//   userArr = prompt("Expression: ");
//   userArr = userArr.split(" ");
// }
// console.log(mathInterpreter(userArr));

//Second version
// let userArr = prompt('Expression: ');
// console.log(eval(userArr));
