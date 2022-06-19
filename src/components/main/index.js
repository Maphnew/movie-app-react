import MovieCard from "./MovieCard";

const Main = ({ resource }) => {
  const movies = resource.read();
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
