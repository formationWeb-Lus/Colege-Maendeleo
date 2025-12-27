document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
  })
  .then(() => {
    alert("Message envoyé");
    e.target.reset();
  });
});
