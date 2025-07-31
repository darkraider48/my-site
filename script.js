
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const action = form.getAttribute("action");

    const response = await fetch(action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Thanks! Your message was sent.");
      form.reset();
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  });
});
