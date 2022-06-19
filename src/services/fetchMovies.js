const fetchMovies = () => {
  let movies = null;
  const url = "https://swapi.dev/api/films";
  const suspender = fetch(url)
    .then((res) => res.json())
    .then((data) => {
      movies = data.results;
    });
  return {
    read() {
      if (movies === null) {
        throw suspender;
      } else {
        return movies;
      }
    },
  };
};

export default fetchMovies;
