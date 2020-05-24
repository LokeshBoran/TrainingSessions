var a = 20;

if (a == 10) {
    console.log("a==10");
} else if(a == 20){
    console.log("else if");
    
} else {
    console.log("else");
}


var b = "20";

if (a==b) {
    console.log("check only value");
}
// username = "420"
// status = 420
// username === status 

console.log("Type OF A: ", typeof a);
console.log("Type OF B: ", typeof b);

if (a===b) { // a==b && typeof a == typeof b
    // 20 == "20" && "number" == "string"
    console.log("check both value and type");
}

a=30

if (a==20 || a%2==0) {
    console.log("AAYA");
    
}
var h=0;

if (h) { // condition false => false, undefined, null, '', 0 
    console.log("H AAYA: ", h);
} else{
    console.log("H HAS Nothing: ", !!h); 
}

console.log(h?"H AAYA": "H HAS Nothing");


for (var i = 0, x=10; i < 5; i++) {
    console.log(i, (x+i)*2);
}
var x = 10
while (x>0) {
    console.log(x);
    x--;
}


// var test = function () {
//     console.log("AAYA TEST");
// }

// test();

(function test() {
    console.log("AAYA TEST 11");
})(); // self declaration function call