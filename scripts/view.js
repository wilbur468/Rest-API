import Button from "./recentbutton.js";

const recentSearchesDiv = document.getElementById('recentSearches');

export function displaySearch(movieList) {
    recentSearchesDiv.innerHTML = '';
    let movieLength = movieList.length > 5 ? 5 : movieList.length;
    for (let i = movieList.length - 1; i >= movieList.length - movieLength; i--) {
        recentSearchesDiv.appendChild(Button(movieList[i]));
    }

}

export function getcolor(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5 && vote < 8) {
        return "orange"
    }
    else {
        return "red"
    }
}

