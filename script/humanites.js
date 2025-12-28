// Données des options humanitaires
const humanitesData = [
  { img: 'images/scientifique.jpg', titre: 'Scientifiques' },
  { img: 'images/commerciale.jpg', titre: 'Commerciales' },
  { img: 'images/pedagogie.jpg', titre: 'Pédagogie' },
  { img: 'images/electricite.jpg', titre: 'Électricité' },
  { img: 'images/construction.jpg', titre: 'Construction' },
  { img: 'images/agro.jpg', titre: 'Agro' },
  { img: 'images/veterinaire.jpg', titre: 'Vétérinaire' },
  { img: 'images/secretariat.jpg', titre: 'Secrétariat' },
  { img: 'images/mine.jpg', titre: 'Mine & Géologie' },
  { img: 'images/couture.jpg', titre: 'Coupe & Couture' },
  { img: 'images/hotellerie.jpg', titre: 'Hôtellerie' },
  { img: 'images/mecanique.jpg', titre: 'Mécanique' }
];

// Sélectionne le conteneur
const container = document.getElementById('humanites-dynamiques');

// Crée dynamiquement les cartes
humanitesData.forEach(option => {
  const div = document.createElement('div');
  div.className = 'option-photo-card';
  div.innerHTML = `
    <img src="${option.img}" alt="${option.titre}">
    <h3>${option.titre}</h3>
  `;
  container.appendChild(div);
});
