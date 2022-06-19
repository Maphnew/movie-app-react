const MovieCard = (props) => {
  const { title, director, releaseDate, producer } = props;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <p>Director: {director}</p>
      <p>Producer: {producer}</p>
      <p>Release Date: {releaseDate}</p>
    </div>
  );
};

export default MovieCard;
