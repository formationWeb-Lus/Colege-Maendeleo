fetch("http://localhost:5000/api/options")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("options-humanites");
    data.forEach(o => {
      container.innerHTML += `
        <div class="option-card">
          <img src="${o.image}">
          <h3>${o.titre}</h3>
          <p>${o.description}</p>
          <a href="option.html?slug=${o.slug}" class="btn-primary">
            Voir détails
          </a>
        </div>
      `;
    });
  });
