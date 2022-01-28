import '../sass/main.scss';
import './modal-window/index';
import fetch from './fetch';
import Pagination from 'tui-pagination';

// import movieCard from '../handlebars/movie-card.hbs'
let page = 2;
// const gallery = document.querySelector('.movie-card__list');
const fetchPopularMoviesList = () => {
  fetch(page)
    .then(res => {
      if (res.results.length === 0) {
        console.log('null result');
      }
      res.results.forEach(movie => {
        console.log(movie.title, movie.id);
      });
      // renderMarkupMovieCard(res);
    })
    .catch(err => console.log(err));
};

fetchPopularMoviesList(page);

// const container = document.querySelector('tui-pagination');
// const options = {
// };
// const pagination = new Pagination(container, options);


// function renderMarkupMovieCard(data) {
//   gallery.insertAdjacentHTML('beforeend', movieCard(data));
// }
