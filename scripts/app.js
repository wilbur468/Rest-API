import { getMovies } from './http.js';
import { displaySearch } from './view.js';



const API_KEY = 'api_key=5245694de26f569841215458eccb9e20';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const form = document.getElementById('form');
const search = document.getElementById('search');


let movieList = localStorage.getItem('moviesList') ? JSON.parse(localStorage.getItem('moviesList')) : [];

// console.log(JSON.parse(movieList));



window.start = () => {
    getMovies(API_URL);
    displaySearch(movieList);
}
window.addEventListener('load', start);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;

    if (searchTerm) {
        movieList.push(searchTerm);
        console.log(movieList);
        localStorage.setItem('moviesList', JSON.stringify(movieList));
        getMovies(searchURL + '&query=' + searchTerm)
        displaySearch(movieList);

    } else {
        getMovies(API_URL);
    }


})






