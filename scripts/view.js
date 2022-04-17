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