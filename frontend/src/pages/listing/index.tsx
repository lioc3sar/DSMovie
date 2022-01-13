import MovieCard from "components/movie-card";
import Pagination from "components/pagination";

function Listing() {
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col col-sm-6 col-lg-4 mb-3">
            <MovieCard />
          </div>
          <div className="col col-sm-6 col-lg-4 mb-3">
            <MovieCard />
          </div>
          <div className="col col-sm-6 col-lg-4 mb-3">
            <MovieCard />
          </div>
          <div className="col col-sm-6 col-lg-4 mb-3">
            <MovieCard />
          </div>
          <div className="col col-sm-6 col-lg-4 mb-3">
            <MovieCard />
          </div>
          <div className="col col-sm-6 col-lg-4 mb-3">
            <MovieCard />
          </div>
          
        </div>
      </div>
     
    </>
  );
}

export default Listing;
