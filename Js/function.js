function sign(info) {
  let Signal = info;
  if (Signal == "GREEN") {
    return "You can Go....";
  } else if (Signal == "YELLOW") {
    return "Wait!";
  } else {
    return "Stop.....";
  }
}

// console.log(sign("RED"));
// console.log(sign("YELLOW"));
// console.log(sign("GREEN"));

//-------------------------------------
//let_"identifier"_=function(){}
// let bal2 = function(){
//     return "This is the variable function and Function expression"
// }
// bal2()

//-------------------------------------

// let bal3 = () =>{
//     return "This is Arrow function"
// }
// bal3()

//-------------------------------------
//Array Function

let array = [1, 2, 3, 4, 5];
console.log(array); // 1,2,3,4,5
console.log(array[2]); //3
console.log(array.length); //5
console.log(array[array.length - 1]); //array[5-1] = array[4]

//Add element at last
array.push(6);
console.log(array);

//Remove element at last
array.pop();
console.log(array);

// Shift = adding element at first
array.shift("0");
console.log(array);

// unshift = removing element at last
array.unshift("0");
console.log(array);

// splice = index_eliminate extend
array.splice(2, 2, "a");
console.log(array);
console.log();

// Slice
console.log(array.slice(2, 3));

// Array to String
let str = array.join(" : ");
console.log(str);

// String to array
let str1 = "a,b,c,d,e";
let arr = str1.split(" : ");
console.log(arr);