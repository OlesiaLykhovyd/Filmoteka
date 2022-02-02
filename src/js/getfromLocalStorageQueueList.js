const queueButton = document.querySelector('#queue-btn');
const gallery = document.querySelector('.movie-card__list');

queueButton.addEventListener('click',getWatchedFilms);

function getWatchedFilms () {
    const getFilms = localStorage.getItem('queueMovie');
    const data = JSON.parse(getFilms);
    gallery.innerHTML = '';
    console.log(data);
    render(data);
   
}

function render (array) {
  const markup = array
    .map(({ id, poster_path, genre_ids, original_language, vote_average, title, release_date }) => {
      return `
      <li class="movie-card__item" data-id="${id}">
                <div class="movie-card">
                 ${
                  poster_path
                    ? `<img src="https://image.tmdb.org/t/p/w500${poster_path}"`
                    : `<img src="https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"`
                //  :`<img src="https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg"`
                 }
                        class="movie-card__poster"
                        alt="${title}"
                        loading="lazy"
                    />
                    <h2 class="movie-info-title"> ${title}</h2>
                    <div class="movie-card__thumb">
                    <div class="movie-info-list">
                        <p class="info-item"> ${genre_ids}</p>
                        <span>&#127871;</span>
              <p class="info-item-year">${release_date?.slice(0, 4)}</p>
              </div>
              <div class="second-thumb">
              <span class="info-item-language"> ${original_language}
              </span>          
              <p class="info-item-rating"><span>&#9733;</span> ${vote_average}</p>
                    </div>
                    </div>
                </div>
    </li> `;
    })
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
}