/**
 * Purpose - To perform arithmetic operation and find the maximum and minimum
 * @author - Sreelipta
 */

 const prompt = require("prompt-sync")({sigint: true});

 let a=prompt("Enter the value of a: ");
 let b=prompt("Enter the value of b: ");
 let c=prompt("Enter the value of c: ");
 
 let p = a+b*c;
 let q = a%b+c;
 let r = c+a/b;
 let s = a*b+c;
 
 console.log("Maximum number: ");
 if(p>q && p>r && p>s){
     console.log("p is greater");
 }
 else if(q>p && q>r && q>s){
     console.log("q is greater");
 }
 else if(r>p && r>q && r>s){
     console.log("r is greater");
 }
 else if(s>p && s>q && s>r){
     console.log("s is greater");
 }
 
 console.log("Minimum number: ");
 if(p<q && p<r && p<s){
     console.log("p is smaller");
 }
 else if(q<p && q<r && q<s){
     console.log("q is smaller");
 }
 else if(r<p && r<q && r<s){
     console.log("r is smaller");
 }
 else if(s<p && s<q && s<r){
     console.log("s is smaller");
 }
 
