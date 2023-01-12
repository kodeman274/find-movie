class DataSource {
  static searchMovie(k) {
    return fetch(`http://www.omdbapi.com/?apikey=c3424c20&s=${k}`)
      .then(response => response.json())
      .then(response => response.Search)
      .catch(`${k} movie not found!`);
  }
}
export default DataSource;
