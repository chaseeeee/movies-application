
const getMovies = () => {
    return fetch('/api/movies')
        .then(response => response.json());
};



const postMovie = () => {
    return fetch('/api/movies', {
        method: "post",
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            title: document.getElementById("newMovie").value,
            rating: document.querySelector('input[name=ratings]:checked').value
        })
    }).then( (response) => {response.json();})


};

const deleteMovie = (id) => {
    return fetch(`/api/movies/${id}`, {
        method: "delete",
        headers: new Headers({
            'Content-Tyle': 'applicatoin/json'
        })
    })
};

module.exports = {getMovies, postMovie, deleteMovie};