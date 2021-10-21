/**
 * Purpose - To check the entered number is prime or not
 * @author - Sreelipta
 */

 const prompt = require("prompt-sync")({sigint : true});

 const number = prompt("Enter a number : ")
 let isPrime = true
 
 
 for(i=2; i<=number/2; i++){
     if(number %i == 0){
         isPrime = false
     }
 }
 if(isPrime){
     console.log("This is a prime number")
 }
 else{
     console.log("This is not a prime number")
 }