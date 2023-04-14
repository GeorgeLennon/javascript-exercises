const leapYears = function(num) {
    return num%4==0 && (num%100!=0||num%400==0);
};
// Do not edit below this line
module.exports = leapYears;
