/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */
const getMovies = require('./getMovies.js');
const movieDisplay = document.getElementById("movieDisplay");

/* GET THESE MOVIES */

getMovies().then((moviesData) => {
    let movies = "";
    console.log('Here are all the movies:');
    moviesData.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);

        movies += `id#${id} - ${title} - rating: ${rating} <br>`;



        /* DISPLAY THE MOVIES ON THE PAGE  */
    });

    movieDisplay.innerHTML = `${movies}`;
    /* CATCH THE ERRORS AND DISPLAY OOPS*/

}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});
