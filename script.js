document.getElementById("message").innerHTML="Do it, the Kingdom want to help you.";

const message =
  "Thank you for send your message to the kingdom. We will respond as soon as possible. Believe in us.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });