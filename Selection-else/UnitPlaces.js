/**
 * Purpose - To Read a Number 1, 10, 100, 1000, etc and display unit places
 * @author - Sreelipta
 */


 const prompt = require('prompt-sync')({sigint : true});

 const number = prompt("Enter a number to know its unit place : ");
 
 switch (Number(number)) {
     case 1:
         console.log("Units")
         break;
     case 10:
         console.log("Tens");
         break;
     case 100:
         console.log("Hundreds");
         break;
     case 1000:
         console.log("Thousands");
         break;
     case 10000:
         console.log("Tens of Thousands");
         break;
     case 100000:
         console.log("Lakhs");
         break;
     default:
         console.log("Not valid input")
         break;
 }