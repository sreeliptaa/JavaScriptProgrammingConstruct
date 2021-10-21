/**
 * Purpose - To take a range of number as input and output the Prime Numbers in that range
 * @author - Sreelipta
 */

 const prompt = require('prompt-sync')({sigint : true});

 const lowerRange = prompt('Enter lower range: ')
 const higherRange = prompt('Enter higher range: ')
 
console.log("Prime numbers in between the range are: ")
 
 for (let i = lowerRange; i <= higherRange; i++) {
     let flag = 0;
 
     for (let j = 2; j < i; j++) {
         if (i % j == 0) {
             flag = 1;
             break;
         }
     }
 
     // if number is greater than 1 and not divisible by numbers
     if (i > 1 && flag == 0) {
         console.log(i);
     }
 }

