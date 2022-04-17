import { getMovies } from './http.js';



const API_KEY = 'api_key=5245694de26f569841215458eccb9e20';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

const searchURL = BASE_URL + '/search/movie?' + API_KEY;


const form = document.getElementById('form');
const search = document.getElementById('search');




// window.start = showMovies(data);
// window.addEventListener('load', start);
start = getMovies(API_URL);
window.addEventListener('load', start);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(searchURL + '&query=' + searchTerm)
    } else {
        getMovies(API_URL);
    }

})

