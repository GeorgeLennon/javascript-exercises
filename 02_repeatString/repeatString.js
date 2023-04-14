const repeatString = function(string, num) {
    if(string==''){
        return '';
    }
    switch(num){
        case 1:
            return string.repeat(1);
        case (num>9):
            return string.repeat(num);
        case (num<0):
            return 'ERROR';
        case 0:
            return '';
        default:
            if(num<0) return "ERROR";
            return string.repeat(num);
            
    }
    
};

// Do not edit below this line
module.exports = repeatString;
