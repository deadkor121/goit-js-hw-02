"use strict";
function checkForSpam(message) {
  message = message.toLowerCase(message);
   let result;
     if (message.includes('spam') || message.includes('sale')) {
       return true;
     } else {
     return false;
   }
   return result;
 }
 console.log(checkForSpam("Latest technology news"));
 console.log(checkForSpam("JavaScript weekly newsletter"));
 console.log(checkForSpam("Get best sale offers now!"));
 console.log(checkForSpam("Amazing SalE, only tonight!"));
 console.log(checkForSpam("Trust me, this is not a spam message"));
 console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
  console.log(checkForSpam("[SPAM] How to earn fast money?"));
