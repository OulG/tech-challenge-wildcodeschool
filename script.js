const message =
  "Thank you for send your message to the kingdom. We will respond as soon as possible. Believe in us.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });



  // document.getElementById("contactForm").innerHTML = "Thank you for send your message to the kingdom. We will respond as soon as possible. Believe in us.";