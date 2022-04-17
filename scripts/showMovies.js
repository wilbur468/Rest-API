import { getcolor } from './view.js';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export function showMovies(data) {

    main.innerHTML = '';

    data.forEach(movie => {

        const { title, poster_path, vote_average, overview } = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = `
            <img src="${IMG_URL + poster_path}" alt="${title}">

                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getcolor(vote_average)}">${vote_average}</span>
                </div>

                <div class="overview">

                    <h3> Overview </h3>
                    ${overview}
                </div>
                `

        main.appendChild(movieE1);

    })

}