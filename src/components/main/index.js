import MovieCard from "./MovieCard";

const Main = ({ data }) => {
  const movies = data.read();
  console.log(movies, data);
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
