import React, { useState, useEffect } from 'react'
import axios from 'axios'
import api from '../../api';
import "./style.css"

export const Banner = () => {
    const [movie, setMovie] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `${process.env.REACT_APP_API}${api.fetchNetflixOriginals}`);
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
            return response;
        }
        fetchData();
    }, []);
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };
    return (
        <div className="banner"
            style={{
                backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
            < div className="banner-contents">
                <h1 className=" banner-title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My list</button>
                </div>
                <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
                < div className="banner-fadebottom"></div>

            </div>


        </div>
    )
}
