document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this[0].value;
  const email = this[1].value;
  const message = this[2].value;

  console.log("Form Submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  alert("Thanks for your message! This demo does not actually send emails.");
});
