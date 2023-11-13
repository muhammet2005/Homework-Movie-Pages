import React, {useEffect, useState} from "react";
import axios from "axios";
import {key} from "../../API/api";
import MovieCart from "../MovieCart";

const UpComing = () => {
    const [upComing,SetUpComing] = useState([])
    const getUpComing = () => {
        axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=3`)
            .then(res => {
                console.log(res)
                SetUpComing(res.data.results)
            });
    };
    useEffect(() => {
        getUpComing()
    }, [])
    return (
        <div id='upComing'>
            <div className='container'>
                <h1>Up Coming</h1>
                <div className='upComing'>
                    {
                        upComing.map(el => <MovieCart elem={el} nameClass={"upComingMovies"}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UpComing;