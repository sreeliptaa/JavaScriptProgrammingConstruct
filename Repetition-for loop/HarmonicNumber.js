/**
 * Purpose - To prints the nth harmonic number of the form
 * H(n) = 1/1 + 1/2 + 1/3 + 1/4 + .... + 1/n
 * @author - Sreelipta
 */

 const prompt = require('prompt-sync')({sigint : true});

 const number = prompt("Enter the number n : ");
 let sum = 0;
 
 for(i = 1; i <= number; i++){
     sum += 1 / i;
 }
 console.log("Harmonic value of the number is : " +sum);


