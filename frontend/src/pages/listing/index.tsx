import axios from "axios";
import MovieCard from "components/movie-card";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";

function Listing() {

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() =>{
    axios.get(`${BASE_URL}/movies?size=12&page=5`)
  .then(response =>{
    const data = response.data as MoviePage;
    setPageNumber(data.number);
    console.log(response.data);
  })
    
  },[]);


  return (
    <>
    <p>{pageNumber}</p>

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
