const removeFromArray = function(array,...args) {//rest parameters
    
    for(let arg of args){//loops through rest parameters
        let index=array.indexOf(arg);
        if(index==-1){
            continue;
        }
        array.splice(index,1);
    }
    return array;


};


// Do not edit below this line
module.exports = removeFromArray;
