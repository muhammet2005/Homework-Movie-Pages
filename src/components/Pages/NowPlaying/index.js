import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { key } from "../../API/api"
import MovieCart from "../MovieCart";

const NowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {

        const getNowPlaying = () => {
            axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=3`)
                .then(res => {
                    console.log(res);
                    setNowPlaying(res.data.results);
                });
        };

        getNowPlaying();
    }, []); // Empty dependency array ensures this runs only once after initial render

    return (
        <div id='nowPlaying'>
            <div className='container'>
                <h1>Now Playing</h1>

                <div className='nowPlaying'>
                    {
                        nowPlaying.map(el => <MovieCart elem={ el} nameClass={"movieInfo"}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NowPlaying;

