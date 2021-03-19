
function flipCoin(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        const value = Math.round(Math.random()*1);
        value ? resolve('Heads'): reject('Tails');
        },2000);
        
    });
}
async function PrintResult(){
    try{
        const result = await flipCoin();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
PrintResult();
PrintResult();
PrintResult();
PrintResult();