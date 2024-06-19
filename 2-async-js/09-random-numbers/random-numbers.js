// Random Numbers 🔢
// Codédex

function randomNumberPromise() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    if (randomNumber < 5) {
      resolve(); // Resolve if the random number is less than 5
    } else {
      reject("Rejected"); // Reject with the random number if 5 or greater
    }
  });
 }
 
 const generateBtn = document.getElementsById("generateButton");
 
 generateBtn.addEventListener("click", randomNumberPromise);