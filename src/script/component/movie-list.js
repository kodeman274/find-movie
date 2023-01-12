import './movie-card.js';

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._movies.forEach((m, i) => {
      if (m.Poster !== "N/A") {
        const cardMovie = document.createElement("movie-card");
        cardMovie.movie = m;
        this.appendChild(cardMovie);
      }
    });
  }

  renderError(k) {
    if (k) {
      this.innerHTML += `<h2 class="placeholder">${k} Movie not found!</h2>`;
    } else {
      this.innerHTML += `<h2 class="placeholder">First, fill out the search box!</h2>`;
    }
  }
}

customElements.define("movie-list", MovieList);