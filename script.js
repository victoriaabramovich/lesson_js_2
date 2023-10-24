// 'use strict'
// #7
let userInfo = {
    firstName: "giorgi",
    lastName: "smith",
    age: 25,
    studentStatus: "active"
  };
  console.log(studentStatus);

//   #8
let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}
console.log(user.studentstatus);


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