import MovieStars from "components/movie-stars";
import "./styles.css";

type Props = { 
  score: number; 
  count: number 
};
function MovieScore({score, count}: Props) {
  // const score = 3.8;
  // const count = 13;
  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars score={score} />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
