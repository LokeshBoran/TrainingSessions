
function process(a, b) {
    var c = 10;
    function sum() {
        return a+b+c;
    }

    function division() {
        return a/b;
    }

    function sub() {
        return a-b+c;
    }
    return {sum, div: division, sub};
    // return a+b;
}



var obj = process(12,11)

console.log(":SUM: ", obj.sum());
console.log(":DIV: ", obj.div());
console.log("SUB: ", obj.sub());


//undefined, number, object, function, boolean and string Data type

// Closures 
