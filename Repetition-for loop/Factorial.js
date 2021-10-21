/**
 * Purpose - To computes a factorial of a number taken as input
 * @author - Sreelipta
 */

 const prompt = require('prompt-sync')({sigint : true});

 const n = prompt('Enter a number: ');
 let fact = 1;
 
 for ( i = 2; i <= n; i++ ) {
     fact = fact * i;
 }
 console.log("Factorial of "+n+ " is " + fact);