const add1=(a,b)=>a+b;
const sub1=(a,b)=>a-b;
const mul1=(a,b)=>a*b;
const div1=(a,b)=>a/b;
const data = (callback)=>{
    let num1=10;
    let num2=20;
    return (callback(num1,num2));
}
console.log(add1(10,20));
console.log(sub1(10,20));
console.log(data(mul1));
console.log(data(div1));