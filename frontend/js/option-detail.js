const slug = new URLSearchParams(window.location.search).get("slug");

fetch(`http://localhost:5000/api/options/${slug}`)
  .then(res => res.json())
  .then(opt => {
    document.getElementById("option-detail").innerHTML = `
      <img src="${opt.image}">
      <h1>${opt.titre}</h1>
      <p>${opt.description}</p>
      <a href="admissions.html" class="btn-primary">
        Pré-inscription
      </a>
    `;
  });
