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