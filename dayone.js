function yearDays(year)
{
        //evenly divisible by 4 = a leap year.
    if(year % 400 === 0) {
        return year + ' has 366 days';
    }
    else if(year % 4 === 0 && year % 100 !== 0) { //centuries 
        return year + ' has 366 days';
    }
    else {
        return year + ' has 365 days'; 
    }
}
console.log(yearDays(1974));


//          problem Two
function multiply(number){
    let len = number.toString().length;
    let result = 0;
    if(number < 0){
        result = number * (5 ** (len - 1))
    }else{
        result = number * (5 ** len);
    }
    return result;
}
console.log(multiply(5));

//Math.abs(number) عشان ابقا ضامن ان الرقم الا عندي هيبقا موجب بستخدم 