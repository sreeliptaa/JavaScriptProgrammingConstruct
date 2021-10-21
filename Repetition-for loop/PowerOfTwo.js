/**
 * Purpose - To print a table of the powers of 2 that are less than or equal to 2^n
 * @author - Sreelipta
 */

 const prompt = require('prompt-sync')({sigint : true});

 const number = prompt("Enter a range for power of 2 : ");
 
 for(i = 0; i <= number; i++){
     console.log(Math.pow(2,i));
 }