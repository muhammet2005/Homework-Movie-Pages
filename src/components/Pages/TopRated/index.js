import React, {useEffect, useState} from "react";
import axios from "axios";
import {key} from "../../API/api";
import MovieCart from "../MovieCart";
import "./style.scss"

const TopRated = ({dark}) => {
    const [topRated,SetTopRated] = useState([])
    const [sortVotes, setSortVotes] = useState('desc'); // Default sorting order is descending

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getTopRated = () => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=3`)
            .then(res => {
                const sortedResults = res.data.results.sort((a, b) => {
                    if (sortVotes === 'asc') {
                        return a.vote_average - b.vote_average;
                    } else {
                        return b.vote_average - a.vote_average;
                    }
                });
                SetTopRated(sortedResults);
            });
    };
    useEffect(() => {
        getTopRated()
    }, [getTopRated, sortVotes])

    const handleSortChange = (e) => {
        setSortVotes(e.target.value);
    };
    return (
        <div id='topRated'>
            <div className='container'>
                <h1 style={{
                    color: dark ?  "black" : "white"
                }}>Top Rated

                    <select className={"nowPlaying--selector"} onChange={handleSortChange} value={sortVotes}>
                        <option value="desc">Highest Rated </option>
                        <option value="asc">Lowest Rated </option>
                    </select>
                </h1>
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