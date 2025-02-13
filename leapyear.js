//leap year calculation normal
function leapYear(year){
    if(year % 4 === 0){
        console.log("This year is leap year");
    }else{
        console.log("This year is not leap year")
    }
}
//leapYear(2025);

//leap year calculation 100% accurate
function leapYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return ("This year is leap year");
        //console.log("This year is leap year");
    }else if(year % 400 === 0){
        return "This year is leap year";
        //console.log("This year is leap year");
    }else{
        return ("This year is not leap year");
        //console.log("This year is not leap year");
    }
}
let leap = leapYear2(2000);
console.log(leap);
