function foo() {
    let num = 0;
    return function() {
        num ++;
        return num
    }
}

const result1 = foo();
console.log(result1());
console.log(result1());
console.log(result1());


const result2 = foo();
console.log(result2());
console.log(result2());
console.log(result2());

function makeAdder(x) {
    return function (y) {
        const sum = x * y;
        return sum
    }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(3));
console.log(add10(2))