// Subscribe Button ✅
// Codédex

const subscribeBtn = document.getElementById("subscribeBtn");
const message = document.getElementById("message");

subscribeBtn.addEventListener("click", () => {
  // Show the message
  message.classList.remove("hidden");
  subscribeBtn.innerText = "Subscribed";

  // Hide the message after 3 seconds (3000 milliseconds)
  setTimeout(() => {
    message.classList.add("hidden");
  }, 3000);
});
