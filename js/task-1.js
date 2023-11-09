function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;

 const totalPrice = pricePerDroid *  orderedQuantity;

  if (totalPrice > customerCredits){
    message = `Insufficient funds!`;
  }else{
    customerCredits -= totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
  }

  return message;
}

console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000)); 
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));