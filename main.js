import "../component/search-bar.js";
import "../component/movie-list.js";
import DataSource from "../data/data-source.js";
import {
  getMovieDetail,
  updateUIDetail
} from "./specifics.js";


const main = () => {
  const searchFactor = document.querySelector("search-bar");
  const listMovie = document.querySelector("movie-list");

  // clicks the search button
  const onButtonSearchClicked = () => {
    DataSource.searchMovie(searchFactor.value)
      .then(renderResult)
      .catch(r => fallbackResult(searchFactor.value));
  };
  searchFactor.clickEvent = onButtonSearchClicked;

  // the key entered
  const onKeyInSearchPressed = async (e) => {
    if (e.keyCode === 13) {
      try {
        const result = await DataSource.searchMovie(searchFactor.value)
        renderResult(result);
      } catch (err) {
        fallbackResult(searchFactor.value);
      }
    }
  };
  searchFactor.keyEvent = onKeyInSearchPressed;



  const renderResult = results => listMovie.movies = results;

  const fallbackResult = keyword => listMovie.renderError(keyword);



  // click on the show details button
  document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-detail')) {
      try {
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = "Please wait...";
        const imdbid = e.target.dataset.imdbid;
        const details = await getMovieDetail(imdbid);
        updateUIDetail(details);
      } catch (err) {
        alert(err);
      }
    }
  });
}


export default main;