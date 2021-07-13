import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './style.css';


const base_url = "https://image.tmdb.org/t/p/original";

export const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies]= useState([]);
    console.log("process.env.REACT_APP_API", process.env.REACT_APP_API);
    useEffect(() => {
       const fetchData = async()=>{
           const response = await axios.get(`${process.env.REACT_APP_API}${fetchUrl}`)
           setMovies(response.data.results);
           return response
       };
       fetchData();
        
    }, []);
    // console.log("Movies", movies);

    const handleClick =() =>{

    }
    return (
        <div className="row"> 
            <h2 className="titleHeading">{title}</h2>
            <div className="show-row">
                {movies && movies.map((movie)=>(
                    <img
                    onClick={()=> handleClick(movie)}
                    key={movie.id}
                    className={`show-rows ${isLargeRow && "show-rowsLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt="thumbnail"
                    />
    ))}
            </div>
        </div>
    )
}
