'use strict';

// #1
let numbers = 100
for (let a = 0; a < numbers.length; a++){
    console.log(numbers [a]);
}

//  #2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let item of array1){
    if(item >0 && item <10)
    console.log(item);
}

// #3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = 5
switch (array2) {
    case "a"
 }
 console.log("true");{
 break;
}
// #4
let array3= [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i<array3.length; i++){
    sum = sum + array3[i];
    console.log(sum);
}

// #5

let array4= [1, 2, 3, 4, 5];
for (let item of array4){
    sum += item;
    let result = sum / array4.length;
    console.log(sum);
}

// #6
let array5 = [1, 2, 3, 7, 6, 9];
for (let i = 0; i < array5.length; i++) {
    if (array5[i] !== 7) {
      console.log(array5[i]);
    }
  }
// #7
let userInfo = {
    firstName: "giorgi",
    lastName: "smith",
    age: 25,
    studentStatus: "active"
  };
  console.log(userInfo.studentStatus);

//   #8
let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
};

if (user.age <18 && user.studentstatus == "active")
console.log("hello"); }
else if (user.name == "levani"){
console.log("hello levani");
}
console.log(console.error(););

// #9

let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
  ];
  for (let item = 0; item < array.length; item++){
  console.console.log[array];
}

// #10
let numberUser = [ 2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10 ]
let result = numberUser % 2 == 0 ? 'ეს რიცხვი ლუწია' : 'ეს რიცხვი კენტია'
console.log(result);  

// #11
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
users.forEach(user => {
    if (user.status) {
        console.log(user.status);
    }
});