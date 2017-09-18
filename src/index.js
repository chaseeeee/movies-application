/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */
const fetchMovie = require('./getMovies.js');
const movieDisplay = document.getElementById("movieDisplay");
const movieSubmit = document.getElementById("movieSubmit");
const dataLoad = loadNewData();


let movieObject = {};
/* GET THESE MOVIES */

function loadNewData() {

    fetchMovie.getMovies().then((moviesData) => {
        let movies = "";
        console.log('Here are all the movies:');
        moviesData.forEach(({title, rating, id}) => {
            /*console.log(`id#${id} - ${title} - rating: ${rating}`);*/

            movies += `<tr><td><button type="button" class="deleteMovie" data-id="${id}" class="button">Remove</button></td><td>${id}</td><td><a href="https://www.youtube.com/results?search_query=${title}" target="new">${title}</a></td><td>rating: ${rating}</td><td><a href="http://www.imdb.com/find?ref_=nv_sr_fn&q=${title}&s=all" target="_blank">IMDB Lookup</a></td></tr>`;


            /*        https://www.youtube.com/results?search_query=terminator*/

            /* DISPLAY THE MOVIES ON THE PAGE  */
        });

        movieDisplay.innerHTML = `<table id="movieTable">${movies}</table>`;
        /* CATCH THE ERRORS AND DISPLAY OOPS*/

        const deleteMovieButtons = document.getElementsByClassName("deleteMovie");
        console.log(deleteMovieButtons);

        Array.from(deleteMovieButtons).forEach(function (elem) {
            elem.addEventListener("click", function() {
                let id = this.getAttribute("data-id");
                fetchMovie.deleteMovie(id);
            });
        })



    }).catch((error) => {
        /*alert('Oh no! Something went wrong.\nCheck the console for details.')*/
        console.log(error);
    });

}

loadNewData();

movieSubmit.addEventListener("click", fetchMovie.postMovie);

module.exports = {loadNewData};




