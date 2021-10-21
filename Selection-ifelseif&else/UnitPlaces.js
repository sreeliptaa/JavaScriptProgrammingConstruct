/**
 * Purpose - To Read a Number 1, 10, 100, 1000, etc and display unit places
 * @author - Sreelipta
 */

 const prompt = require("prompt-sync")({sigint: true});

 let number = prompt("Enter a number to know its unit place: ");

 if (number>=1 && number<=9) console.log("Units.")
 
 else if (number>=10 && number<=99) console.log("Tens.")
 
 else if (number>=100 && number<=999) console.log("Hundreds.")
 
 else if (number>=1000 && number<=9999) console.log("Thousands.")
 
 else if (number>=10000 && number<=99999) console.log("Tens of Thousands.")
 
 else if (number>=100000 && number<=999999) console.log("Lakhs.")

