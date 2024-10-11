// Cosmic Birthday 🎊
// Codédex

// function fetchAPOD(date) {
// const apodContainer = document.getElementById("apod-container");
// const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`;

// fetch(url)
// .then((response) => response.json())
// .then((data) => {
// apodContainer.innerHTML = `//         <img id="apod-image" src="${data.url}" alt="${data.title}" width="600">
//         <div id="apod-info">
//           <h2 id="apod-title">${data.title}</h2>
//           <p>${data.explanation}</p>
//         </div>
//      `;
// })
// .catch((error) => {
// apodContainer.innerHTML =
// "An error occurred while fetching the APOD data.";
// console.error("Error fetching APOD:", error);
// });
// }

// Alternative with async/await:
const fetchAPOD = async (date) => {
  const apodContainer = document.getElementById("apod-container");
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`;
  const response = await fetch(url);
  
  if (!response.ok) {
  apodContainer.innerHTML = "An error occurred while fetching the APOD data."
  throw new Error("An error occurred while fetching the APOD data.")
  }
  
  const data = await response.json();
  apodContainer.innerHTML = `
  
     <img id="apod-image" src="${data.url}" alt=${data.title}" width="600">
     <div id="apod-info">
       <h2 id="apod-title">${data.title}</h2>
       <p>${data.explanation}</p>
     </div>
   `
  }

document
.getElementById("birthdayForm")
.addEventListener("submit", function (event) {
event.preventDefault();
const birthday = document.getElementById("birthday").value;
const errorMessage = document.getElementById("error-message");
const apodContainer = document.getElementById("apod-container");
const minDate = new Date("1995-06-16");

if (new Date(birthday) < minDate) {
errorMessage.textContent =
"Invalid entry: Please enter a date on or after June 16, 1995.";
apodContainer.innerHTML = "";
} else {
errorMessage.textContent = "";
fetchAPOD(birthday);
}
});
