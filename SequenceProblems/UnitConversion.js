/**
 * Purpose - Conversion of diffrent units
 * @author - Sreelipta
 */


//problem : inch to feet conversion

let inches = 42;
let InchToFeet = inches / 12;
console.log("Conversion of inch to feet =  " + InchToFeet);

//problem : Rectangle conversion of feet into meters 

let plotInFeet = 60 * 40;
let plotInMeters = plotInFeet / 3.2808;
console.log("Conversion of rectangle into meters =  " + plotInMeters);

//problem : Calculation of 25 plots into meters

let plotInFeet1 = 60 * 40;
const numOfPlots = 25;
let plotInMeters1 = numOfPlots * (plotInFeet1 / 3.2808);
console.log("Area of 25 plots  =" + plotInMeters1);