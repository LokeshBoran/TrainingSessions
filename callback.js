function test(cb) {
    setTimeout(function () {
        console.log("TimeOut");
        cb();
    }, 2000)    
}

test(function () {
    console.log("CB");
});
console.log('TEST');
