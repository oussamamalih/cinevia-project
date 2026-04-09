

const movies = [
  {
    image: "imagesMovies/Mad Max Fury Road.webp",
    title: "MadMax: Fury Road",
    category: "Action"
  },
  {
    image: "imagesMovies/The walking dead.jpg",
    title: "the walking dead",
    category: "Drama"
  },
  {
    image: "imagesMovies/dexter.jpg",
    title: "Dexter",
    category: "Drama"
  },
  {
    image: "imagesMovies/the witcher.jpg",
    title: "The Witcher",
    category: "Action"
  },
  {
    image: "imagesMovies/Stranger things.jpg",
    title: "Stranger things",
    category: "Drama"
  },
  {
    image: "imagesMovies/lacasa.jpg",
    title: "la casa de papel",
    category: "Action"
  },
  {
    image: "imagesMovies/THE LAST KINGDOM.jpg",
    title: "THE last kingdom",
    category: "Drama"
  },
  {
    image: "imagesMovies/Watch Guardianes de la Noche_ Kimetsu no Yaiba.jpg",
    title: "Demon Slayer",
    category: "Drama"
  },
  {
    image: "imagesMovies/The Hangover _3.jpg",
    title: "The Hangover 3",
    category: "comedy"
  },
];

const container = document.getElementById("movies-container");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    
    <div class="card-content">
      <h3>${movie.title}</h3>
      <span class="category">${movie.category}</span>
      <button>Voir détails</button>
    </div>
  `;

  container.appendChild(card);
});