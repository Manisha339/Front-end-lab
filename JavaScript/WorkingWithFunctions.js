var c=10; // global variable
function arithm(num1,num2){
    var a= num1*num2; //outer function variable
    var b=num1+num2;
    return function(){
        var d=15; //local variable
        c=5;
        console.log(a+b+c+d);
    };
}

var result=arithm(2,3);
console.log(result);
console.log(c);
result();
console.log(c);