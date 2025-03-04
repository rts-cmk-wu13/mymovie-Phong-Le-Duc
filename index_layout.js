let divElm = document.createElement("div")
divElm.id = "root"

divElm.innerHTML = `
<header class="header">
<h1 class="header__title">MyMovies</h1>
<form action="">
    <button class=header__darkmode-switch><img src="/img/dark_mode_switch.png" alt=""></button>
</form>
</header>

<main></main>

<footer>
<button><img src="/img/Bookmark.png" alt=""></button>
<button><img src="/img/Bookmark Copy.png" alt=""></button>
<button><img src="/img/Bookmark Copy 2.png" alt=""></button>
</footer>
`
document.querySelector("body").append(divElm)



let sectionElm1 = document.createElement("section")
sectionElm1.className = "movies1"
document.querySelector("main").append(sectionElm1)


let sectionElm2 = document.createElement("section")
sectionElm2.className = "movies2"
document.querySelector("main").append(sectionElm2)






// fetch now playing list from api
const url1 = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options1 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzI4MjBjMjg1ZTExODI0NTE4YmQ2YmIxMDk2MTFlYSIsIm5iZiI6MTc0MDk4NjgxOC4zMTEsInN1YiI6IjY3YzU1OWMyODgxYzAxM2VkZTdhNmZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrMpmSDPrfQXaE4MFgo8xAG45Qa1uHr9C3xtwehm910'
  }
};

fetch(url1, options1)
  .then(response => response.json())
  .then(data => {
    sectionElm1.innerHTML = `
        <div class="movies1__showing">
<h2>Now Showing</h2>
<button>See more</button>
</div>

<div class="movies1__list">
         ${data.results.map(function (movie) {
        // console.log(movie);
      return `
      <div class="movies1__card">
      <figure class="movies1__img"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt=""></figure>
        <p>${movie.title}</p>
        <p><img class="star" src="img/Star.png" alt="">
        ${movie.vote_average}/10 <span>IMDb</span>
    </p>
         </div>
        `
    }).join("")}
    </div>
   `
  })
  .catch(err => console.error(err));

//   ------------------------

// fetch POPULAR list from api

const url2 = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options2 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzI4MjBjMjg1ZTExODI0NTE4YmQ2YmIxMDk2MTFlYSIsIm5iZiI6MTc0MDk4NjgxOC4zMTEsInN1YiI6IjY3YzU1OWMyODgxYzAxM2VkZTdhNmZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrMpmSDPrfQXaE4MFgo8xAG45Qa1uHr9C3xtwehm910'
  }
};

fetch(url2, options2)
  .then(response => response.json())
  .then(data => {
    sectionElm2.innerHTML = `
    <div class="movies2__popular">
<h2>Popular</h2>
<button>See more</button>
</div>

<div class="movies2__list">
      ${data.results.map(function (movie) {
      // console.log(movie);
      return `
      <div class="movies2__card">
        <figure class="movies2__img"><img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt=""></figure>
        <p>${movie.title}</p>
        <p><img class="star" src="img/Star.png" alt="">
        ${movie.vote_average}/10 <span>IMDb</span>
    </p>
    </p>
        `
    }).join("")}
    </div>
`
  })
  .catch(err => console.error(err));
