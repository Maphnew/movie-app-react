import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Main = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const url = "https://swapi.dev/api/films";
      const data = await fetch(url).then((res) => res.json());
      setMovies(data.results);
    };
    fetchMovies();
  }, []);
  return (
    <main className="main">
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.title}
            title={movie.title}
            director={movie.director}
            releaseDate={movie.release_date}
            producer={movie.producer}
          />
        );
      })}
    </main>
  );
};

export default Main;
