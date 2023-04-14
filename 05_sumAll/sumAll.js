const sumAll = function(num1,num2) {
    let sum=0;
    if(num1<0||num2<0){
        return "ERROR";
    }
     else if(num1<num2){
        for(let i=num1;i<=num2;++i){
           sum+=i;
        }
        return sum;
     }else if(num1>num2){
        for(let i=num1;i>=num2;--i){
            sum+=i;
        }
        return sum;
     }else if(typeof(num2)==String){
        return "ERROR";
     }else if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
     }
     else{
        return "ERROR";
     }
};

// Do not edit below this line
module.exports = sumAll;
