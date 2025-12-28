document.getElementById("admissionForm").addEventListener("submit", e => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  fetch("http://localhost:5000/api/admissions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(() => {
    alert("Pré-inscription envoyée avec succès");
    e.target.reset();
  });
});
