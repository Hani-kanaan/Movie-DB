// Trending.js
import React from 'react';
import { useState , useEffect } from 'react';
import Pagination from './Pagination';

const img_300 =  "https://image.tmdb.org/t/p/w300" ; // for the image path
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg" ; // holder if there is no image available
var Access_key = "2f42c9c46dc617e01d40dc3578e8c3b3"


function Trending() {
  const [state, setState] = useState([]); //initializing the state variable as an empty array
  const fetchTrending = async () => {
    const data = await fetch(`
    https://api.themoviedb.org/3/trending/all/day?api_key=${Access_key}`);
    const dataJ = await data.json(); // fetching data from API in JSON Format
    setState(dataJ.results); //storing that data in the state
    console.log(dataJ)
  };
   
  useEffect(() => {
    fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
  }, []);

    
  return (
    <div className="container">
      <div className="row">
 
        {state.map((Val) => {
          const {
            name,
            title,
            poster_path,
            first_air_date,
            release_date,
            id,
          } = Val;
          return (
            <div
              key={id}
              className="col-md-3 col-sm-4 py-3 d-flex justify-content-center g-4"
              id="card"
            >
              <div className="card bg-dark" key={id}>
                <img
                  src={poster_path ? `${img_300}/${poster_path}` : unavailable}
                  className="card-img-top pt-3 pb-0 px-3"
                  alt={title || name}
                />
                <div className="card-body">
                  <h5 className="card-title ">{title || name}</h5>
                  <div className="d-flex">
                    <div>{first_air_date || release_date}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination/>
    </div>
  );
}

export default Trending;