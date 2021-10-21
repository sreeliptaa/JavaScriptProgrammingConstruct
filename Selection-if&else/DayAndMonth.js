/**
 * Purpose - To print true if day of month is between March 20 and June 20,else print false
 * @author - Sreelipta
 */

 const prompt = require("prompt-sync")({sigint: true});

 let day = prompt("Enter day: ");
 let month = prompt("Enter month: ");
 
 if ((day<=20 && month<=6) && (day>=20 && month>=3) && (day<=31))
 {
     console.log("True");
 }
 else
 {
     console.log("False");
 }

