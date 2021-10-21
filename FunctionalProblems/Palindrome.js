/**
 * Purpose - To check if the two numbers are Palindromes or not
 * @author - Sreelipta
 */

 const prompt = require('prompt-sync')({sigint : true});

 function checkPalindrome(number1) {
    let rem = 0;
    let rev = 0;
     while ( number1 > 0 ) {
         rem = number1 % 10;
         rev = rev * 10 + rem;
         number1 = Math.floor(number1 / 10);
     }
     
     if ( rev == number2 ) {
         return 0;
     }
     else {
         return 1;
     }
 }
 
 let number1 = prompt('Enter the first number: ');
 let number2 = prompt('Enter the second number: ');

 if (checkPalindrome(number1) == 0) {
     console.log(number1+ " and " +number2 + " are palindrome");  
 }
 else {
     console.log(number1+ " and " +number2 + " are not palindrome");
 }
 