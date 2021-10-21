/**
 * Purpose - To simulate a coin flip and print out "Heads" or "Tails" 
 * @author - Sreelipta
 */

 let coinFlip=Math.floor((Math.random()*2)+1);

 if (coinFlip==1)
 {
     console.log("You got Head");
 }
 else
 {
     console.log("You got Tail");
 }
