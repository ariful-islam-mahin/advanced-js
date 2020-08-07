function foo() {
    var fruit = 'apple';
    console.log(fruit)
}

foo()              //apple
// console.log(fruit) //error: fruit is not defined 

function foo2() {
    if(true){
        var fruits1 = 'apple';
        const fruits2 = 'banana';
        let fruits3 = 'strawberry';
    }
    console.log(fruits1); 
    console.log(fruits2);
    console.log(fruits3);
}

foo2()
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined

function foo3(){
    var fruit1 = 'apple';        
    const fruit2 = 'banana';     
    let fruit3 = 'strawberry';
    function foo4(){
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    foo4();
}

foo3();

//result:
//apple
//banana
//strawberry