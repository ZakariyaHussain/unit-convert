
// Kilometer to mile
function kmToMile(km){
    let mile = km / 1.609;
    return mile;
}
let mile = kmToMile(3);
//console.log(mile, "mile");

// mile to Kilometer
function mileToKm(mile){
    let km = mile * 1.609;
    return km;
}
let km = mileToKm(5);
//console.log(km, "km");

// feet to inch
function feetToInch(feet){
    let inch = feet * 12;
    return inch;
}
let inch = feetToInch(1.5);
//console.log(inch, "inch");

// inch to feet
function inchToFeet(inch){
    let feetFraction = inch / 12;
    let feet = parseInt(feetFraction);
    let remainInch = inch % 12;
    let result = (feet + " feet " + remainInch + " inch");
    return result;
}
let result = inchToFeet(33);
console.log(result);
