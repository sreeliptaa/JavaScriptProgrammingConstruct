/**
 * Purpose - To read 5 Random 2 Digit values,then find their sum and the average
 * @author - Sreelipta
 */

 let number1=(Math.floor(Math.random()*99)+1);
 let number2=(Math.floor(Math.random()*99)+1);
 let number3=(Math.floor(Math.random()*99)+1);
 let number4=(Math.floor(Math.random()*99)+1);
 let number5=(Math.floor(Math.random()*99)+1);
 
 let sum=number1+number2+number3+number4+number5;
 console.log("Sum of five random number " + number1 + " + " + number2 + " + " + number3 + " + " + number4 + " + " + number5 + " are = " + sum);
 
 let average=sum/5;
 console.log("Average of five number is "+ average);


