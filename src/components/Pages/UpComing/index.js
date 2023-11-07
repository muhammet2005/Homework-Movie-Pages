import React, {useEffect, useState} from "react";
import axios from "axios";
import {key} from "../../API/api";

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
                        upComing.map(el => (
                            <div className={"upComingMovies"}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default UpComing;