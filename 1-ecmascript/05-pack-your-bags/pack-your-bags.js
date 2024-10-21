// Pack Your Bags 🗺️
// Codédex

const planVacation = (destinationOne, destinationTwo, ...moreDestinations) => {
  return [destinationOne, destinationTwo, ...moreDestinations].join(", ");
}

let place = planVacation("Nepal", "Newyork", "Thailand", "China");
console.log(`Your planned vacation destinations are ${place}`);