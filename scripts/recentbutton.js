import { getMovies } from './http.js';
const API_KEY = 'api_key=5245694de26f569841215458eccb9e20';
const BASE_URL = 'https://api.themoviedb.org/3';


const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const Button = (movie) => {
    const recentButton = document.createElement('button');
    recentButton.setAttribute('class', "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2")
    recentButton.innerText = movie;
    recentButton.addEventListener("click", () => {
        getMovies(searchURL + '&query=' + movie)
    })

    return recentButton;
}

export default Button;