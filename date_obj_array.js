// var currentDate = new Date()
var user = {
    name: 'Jadu',
    fatherName: 'Aliens',
    DOB: new Date(),
    Age: 2800,
    branch: 'Computer Science'
}

var numArray =[1,6, 23,4];

// for (let i = 0; i < numArray.length; i++) {
//     const element = numArray[i];
//     console.log(element);
// }

// numArray.unshift('training')

// numArray.forEach(function (value, index) {
//     console.log(value, index);
// })

var newArray = numArray.every(function (value) {
    return value%2===0;
});

console.log(numArray);
console.log(newArray);

