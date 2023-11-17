import React, {useEffect, useState} from "react";
import axios from "axios";
import {key} from "../../API/api";
import MovieCart from "../MovieCart";

const TopRated = ({dark}) => {
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
                <h1 style={{
                    color: dark ?  "black" : "white"
                }}>Top Rated</h1>
                <div className='topRated'>
                    {
                        topRated.map(el => <MovieCart elem={el} nameClass={"topRatedMovies"}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;