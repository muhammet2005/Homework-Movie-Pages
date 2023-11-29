// Popular.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { key } from "../../API/api"
import MovieCart from "../MovieCart";
import "./style.scss"

const Popular = ({ dark }) => {
    const [popular, setPopular] = useState([]);
    const [sortVotes, setSortVotes] = useState('desc'); // Default sorting order is descending

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getPopular = () => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=3`)
            .then(res => {
                const sortedResults = res.data.results.sort((a, b) => {
                    if (sortVotes === 'asc') {
                        return a.vote_average - b.vote_average;
                    } else {
                        return b.vote_average - a.vote_average;
                    }
                });
                setPopular(sortedResults);
            });
    };

    useEffect(() => {
        getPopular();
    }, [getPopular, sortVotes]);

    useEffect(() => {
        console.log(popular);
    }, [popular]);

    const handleSortChange = (e) => {
        setSortVotes(e.target.value);
    };

    return (
        <div id='popular'>
            <div className='container'>
                <h1 style={{ color: dark ? "black" : "white" }}>
                    Popular
                    <select className={"nowPlaying--selector"} onChange={handleSortChange} value={sortVotes}>
                        <option value="desc">Highest Rated </option>
                        <option value="asc">Lowest Rated </option>
                    </select>
                </h1>
                <div className='popular'>
                    {popular.map(el => <MovieCart elem={el} nameClass={"popularMovies"} key={el.id} />)}
                </div>
            </div>
        </div>
    );
};

export default Popular;
