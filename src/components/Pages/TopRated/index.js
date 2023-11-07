import React, {useEffect, useState} from "react";
import axios from "axios";
import {key} from "../../API/api";

const TopRated = () => {
    const [topRated,SetTopRated] = useState([])
    const getTopRated = () => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=3`)
            .then(res => {
                console.log(res)
                SetTopRated(res.data.results)
            });
    };
    useEffect(() => {
        getTopRated()
    }, [])
    return (
        <div id='topRated'>
            <div className='container'>
                <h1>Top Rated</h1>
                <div className='topRated'>
                    {
                        topRated.map(el => (
                            <div className={"topRatedMovies"}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;