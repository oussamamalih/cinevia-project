const movies = [
  {
    image: "imagesMovies/Mad Max Fury Road.webp",
    title: "MadMax",
    category: "Action",
    desc: "In a relentless, sun-scorched future where gasoline and sanity are scarce, a defiant woman and a lone drifter spark a high-octane rebellion: Imperator Furiosa breaks away from a tyrant's convoy to rescue a group of captive women, and Max Rockatansky — a haunted survivor with a violent past — is forced into their desperate escape across an endless wasteland. Explosive chases, razor-edged stunts, and a thunderous road war collide in a visceral, wordless roar of survival, redemption, and fury."
  },
  {
    image: "imagesMovies/banshee.jpg",
    title: "Banshee",
    category: "Action",
    desc: "Banshee suit un ancien braqueur qui, à sa sortie de prison, usurpe l’identité d’un shérif assassiné dans la petite ville amish de Banshee, en Pennsylvanie, pour affronter son passé tout en imposant sa propre justice. Portée par Antony Starr et créée par Jonathan Tropper et David Schickler, la série séduit par ses scènes d’action spectaculaires, son intensité et ses personnages complexes. Saluée pour ses combats chorégraphiés et sa tension dramatique, elle est souvent décrite comme brutale, stylisée et addictive."
  },
  {
    image: "imagesMovies/got.jpg",
    title: "Game of Thrones",
    category: "Action",
    desc: "Game of Thrones se déroule sur les continents fictifs de Westeros et Essos, où de puissantes familles s'affrontent pour le Trône de Fer tandis qu'une menace ancestrale resurgit au nord du Mur. Adaptée des romans de George R. R. Martin, la série mêle intrigues politiques, guerres et enjeux de survie. Portée par un casting marquant, des décors spectaculaires et une réalisation ambitieuse, elle a marqué la télévision par son ampleur narrative, ses personnages complexes et ses rebondissements. Acclamée par la critique et le public, elle a remporté de nombreuses récompenses, malgré des avis plus partagés sur sa saison finale."
  },
  {
    image: "imagesMovies/The walking dead.jpg",
    title: "The Walking Dead",
    category: "Drama",
    desc: "Un ancien adjoint de shérif endurci mène un groupe hétéroclite de survivants à travers une Amérique post-apocalyptique envahie par des rôdeurs affamés, tandis qu'ils luttent contre la raréfaction des ressources, des humains impitoyables et l'effondrement de la civilisation, tout en s'efforçant de préserver leur humanité."
  },
  {
    image: "imagesMovies/dexter.jpg",
    title: "Dexter",
    category: "Drama",
    desc: "Expert en analyse de projections de sang, doté d'un esprit brillant et d'un calme apparent, Dexter Morgan mène une double vie glaçante : le jour, il aide la police de Miami à résoudre des meurtres brutaux ; la nuit, il traque et élimine des criminels dangereux en fuite, guidé par un code moral strict inculqué par son père adoptif. Alors que sa double vie devient de plus en plus périlleuse, Dexter doit jongler entre ses relations, ses enquêtes et la menace constante d'être démasqué."
  },
  {
    image: "imagesMovies/the witcher.jpg",
    title: "The Witcher",
    category: "Action",
    desc: "Geralt de Riv, chasseur de monstres solitaire, parcourt un continent aux mœurs troubles, acceptant des contrats périlleux pour gagner sa vie et affrontant bêtes féroces, sorciers impitoyables et intrigues politiques. Hanté par le destin et lié par un lien complexe à la magicienne Yennefer et à la jeune princesse Ciri, Geralt doit protéger celles qu'il aime, tandis que d'anciennes prophéties et la cruauté humaine menacent de les anéantir."
  },
  {
    image: "imagesMovies/Stranger things.jpg",
    title: "Stranger Things",
    category: "Drama",
    desc: "Lorsqu'une petite ville tranquille de l'Indiana est bouleversée par la disparition soudaine d'un jeune garçon, ses amis, sa famille et un chef de police déterminé découvrent un laboratoire gouvernemental secret, une mystérieuse jeune fille dotée d'étranges pouvoirs et une dimension parallèle obscure appelée l'Upside Down — forçant un groupe d'enfants ordinaires à affronter des horreurs surnaturelles, à grandir trop vite et les liens qui les unissent."
  },
  {
    image: "imagesMovies/lacasa.jpg",
    title: "La Casa de Papel",
    category: "Action",
    desc: "Un génie du crime connu sous le nom d'El Profesor réunit une équipe hétéroclite de braqueurs, chacun utilisant des noms de villes comme pseudonymes, pour exécuter un braquage audacieux et méticuleusement planifié à la Monnaie royale d'Espagne — prenant des otages et affrontant les négociateurs de la police tandis que tensions, trahisons et histoires personnelles se dévoilent ; à mesure que les enjeux s'intensifient, l'équipe doit s'accrocher à la loyauté et à la ruse pour réussir le crime parfait."
  },
  {
    image: "imagesMovies/THE LAST KINGDOM.jpg",
    title: "The Last Kingdom",
    category: "Drama",
    desc: "Guerrier farouche né Saxon mais élevé par des Vikings, Uhtred de Bebbanburg lutte pour reconquérir son héritage ancestral au milieu des luttes de pouvoir brutales de l'Angleterre des IXe et Xe siècles ; déchiré entre deux cultures, il doit choisir ses allégeances, forger des alliances fragiles et manier l'épée et l'esprit pour façonner l'avenir d'un royaume."
  },
  {
    image: "imagesMovies/Watch Guardianes de la Noche_ Kimetsu no Yaiba.jpg",
    title: "Demon Slayer",
    category: "Drama",
    desc: "Jeune épéiste doux mais déterminé, Tanjiro Kamado se lance dans une quête périlleuse pour venger sa famille et guérir sa sœur, Nezuko, après que des démons ont massacré leur clan et l'ont transformée en une de ces créatures cauchemardesques. Entraîné par des mentors exigeants et accompagné de compagnons d'armes intrépides, Tanjiro affronte des ennemis monstrueux, découvre de tragiques vérités sur le fléau démoniaque et apprend à maîtriser des techniques d'épée et de respiration époustouflantes, tout en préservant son espoir, sa compassion et les liens qui le maintiennent en humanité."
  },
  {
    image: "imagesMovies/The Hangover _3.jpg",
    title: "The Hangover 3",
    category: "Comedy",
    desc: "Après une dernière aventure rocambolesque qui tourne au fiasco, la meute de loups — Phil, Stu, Alan et Doug — se retrouve embarquée dans une course contre la montre chaotique à travers le monde pour réparer leurs erreurs passées et survivre à une série de dangers toujours plus absurdes. Entre plans disparates, vieilles rancunes et une amitié indéfectible, ils se lancent dans une lutte contre la montre à travers un monde interlope et clinquant, fait de crimes, de mauvais choix et de mésaventures au moment le plus improbable."
  },
  {
    image: "imagesMovies/dumb.jpg",
    title: "Dumb & Dumber",
    category: "Comedy",
    desc: "Dumb and Dumber (1994) suit Lloyd et Harry, deux amis d’une bêtise redoutable, qui traversent les États-Unis pour rendre une mallette à une femme rencontrée par hasard, se retrouvant mêlés à un complot. Portée par Jim Carrey et Jeff Daniels, cette comédie loufoque des frères Farrelly est rythmée, absurde et riche en gags visuels. Accueillie tièdement à sa sortie mais devenue culte, elle est vivement recommandée aux amateurs d’humour déjanté."
  },
];
 
/* ── DOM references ── */
const container      = document.getElementById("movies-container");
const overlay        = document.getElementById("overlay");
const modalImg       = document.getElementById("modalImg");
const modalTitle     = document.getElementById("modalTitle");
const modalDesc      = document.getElementById("modalDesc");
const modalCategory  = document.getElementById("modalCategory");
const closeBtn       = document.getElementById("closeBtn");
const favBtn         = document.getElementById("favBtn");
const favSection     = document.querySelector(".favorites");
const searchInput    = document.querySelector(".search-box input");
const catButtons     = document.querySelectorAll(".cat-btn");
 
/* ── State ── */
let currentMovie  = null;
let favorites     = [];        // stores movie titles already in favorites
let activeFilter  = "Tous";
 
/* ── Open modal ── */
function openModal(movie) {
  currentMovie = movie;
  modalImg.src            = movie.image;
  modalTitle.textContent  = movie.title;
  modalDesc.textContent   = movie.desc;
  modalCategory.textContent = movie.category;
 
  // Update fav button label based on current state
  updateFavBtn();
 
  overlay.classList.add("show");
}
 
/* ── Update favourite button label ── */
function updateFavBtn() {
  if (!currentMovie) return;
  const isFav = favorites.includes(currentMovie.title);
  favBtn.textContent = isFav ? "Retirer des favoris 💔" : "Ajouter aux favoris ❤️";
}
 
/* ── Close modal ── */
function closeModal() {
  overlay.classList.remove("show");
  currentMovie = null;
}
 
closeBtn.onclick = closeModal;
 
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
 
/* ── Favourite toggle ── */
favBtn.addEventListener("click", () => {
  if (!currentMovie) return;
 
  const alreadyFav = favorites.includes(currentMovie.title);
 
  if (alreadyFav) {
    // Remove from favorites
    favorites = favorites.filter(t => t !== currentMovie.title);
    removeFavCard(currentMovie.title);
  } else {
    // Add to favorites
    favorites.push(currentMovie.title);
    addFavCard(currentMovie);
  }
 
  updateFavBtn();
});
 
/* ── Add a favourite card ── */
function addFavCard(movie) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.favTitle = movie.title;
 
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="card-content">
      <h3>${movie.title}</h3>
      <p>${movie.category}</p>
      <button class="details-btn">Voir détails</button>
    </div>
  `;
 
  card.querySelector(".details-btn").addEventListener("click", () => openModal(movie));
  favSection.appendChild(card);
}
 
/* ── Remove a favourite card ── */
function removeFavCard(title) {
  const card = favSection.querySelector(`[data-fav-title="${title}"]`);
  if (card) card.remove();
}
 
/* ── Build movie cards ── */
function renderCards(list) {
  container.innerHTML = "";
 
  if (list.length === 0) {
    container.innerHTML = `<p style="color:#aaa; text-align:center; grid-column:1/-1; padding:40px;">Aucun film trouvé.</p>`;
    return;
  }
 
  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("card");
 
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="card-content">
        <h3>${movie.title}</h3>
        <p>${movie.category}</p>
        <button class="details-btn">Voir détails</button>
      </div>
    `;
 
    card.querySelector(".details-btn").addEventListener("click", () => openModal(movie));
    container.appendChild(card);
  });
}
 
/* ── Filter logic (category + search combined) ── */
function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
 
  const filtered = movies.filter(movie => {
    const matchCategory =
      activeFilter === "Tous" ||
      movie.category.toLowerCase() === activeFilter.toLowerCase();
 
    const matchSearch =
      query === "" ||
      movie.title.toLowerCase().includes(query) ||
      movie.category.toLowerCase().includes(query);
 
    return matchCategory && matchSearch;
  });
 
  renderCards(filtered);
}
 
/* ── Category buttons ── */
catButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    catButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
 
    // Map French button labels to data categories
    const labelMap = {
      "Tous":    "Tous",
      "Action":  "Action",
      "Comédie": "Comedy",
      "Drame":   "Drama",
    };
 
    activeFilter = labelMap[btn.textContent.trim()] || btn.textContent.trim();
    applyFilters();
  });
});
 
/* ── Search input ── */
searchInput.addEventListener("input", applyFilters);
 
/* ── Initial render ── */
// Set "Tous" button as active by default
catButtons[0].classList.add("active");
renderCards(movies);