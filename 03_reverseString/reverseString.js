const reverseString = function(string) {
    //let arrofstr=string.split('');//splits string into substrings which fit into array indexes, seperated by seperators
    //suych as spaces or commas
    if(string==''){
        return '';
    }else{
        
        
       
        return  string.split('').reverse().join('');
    }
};

// Do not edit below this line
module.exports = reverseString;
