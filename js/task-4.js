"use strict";
function getShippingCost(country) {
  let cost;
  switch (country) {
    case 'China':
      cost = 100;
      break;
    case 'Chile':
      cost = 250;
      break;
    case 'Australia':
      cost = 170;
      break;
    case 'Jamaica':
      cost = 120;
      break;
    default:
      return "Sorry, there is no delivery to your country";
  }
  return `Shipping to ${country} will cost ${cost} credits`;
}

console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Australia'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Canada'));