import axios from 'axios';
import "./style.css"
import React, { useEffect, useState } from 'react';
import { key } from "../../API/api"

const NowPlaying = () => {
    const [nowPlaying,SetNowPlaying] = useState([])
    const getNowPlaying = () => {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=3`)
    .then(res => {
            console.log(res)
        SetNowPlaying(res.data.results)
        });
    };
    useEffect(() => {
        getNowPlaying()
    }, [])
    return (
        <div id='popular'>
            <div className='container'>
                <h1>Now Playing</h1>
                <div className='nowPlaying'>
                    {
                        nowPlaying.map(el => (
                            <div className={"movieInfo"}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" />
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default NowPlaying;