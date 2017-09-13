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

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);

    movieDisplay.innerHTML =`id#${id} - ${title} - rating: ${rating}`;

    /* DISPLAY THE MOVIES ON THE PAGE  */
  });




  /* CATCH THE ERRORS AND DISPLAY OOPS*/

}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});
