// NowPlaying.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { key } from "../../API/api";
import MovieCart from "../MovieCart";
import "./style.scss"

const NowPlaying = ({ dark }) => {
    const [page,setPage] = useState(1)

    const [nowPlaying, setNowPlaying] = useState([]);
    const [sortVotes, setSortVotes] = useState('desc'); // Default sorting order is descending

    useEffect(() => {
        const getNowPlaying = () => {
            axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=${page}`)
                .then(res => {
                    // Sort the results by vote_average and sortOrder
                    const sortedResults = res.data.results.sort((a, b) => {
                        if (sortVotes === 'asc') {
                            return a.vote_average - b.vote_average;
                        } else {
                            return b.vote_average - a.vote_average;
                        }
                    });
                    setNowPlaying(sortedResults);
                });
        };

        getNowPlaying();
    }, [page, sortVotes]);

    const handleSortChange = (e) => {
        setSortVotes(e.target.value);
    };

    return (
        <div id='nowPlaying'>
            <div className='container'>
                <h1 style={{ color: dark ? "black" : "white" }}>
                    Now Playing
                    <select  className={"nowPlaying--selector"} onChange={handleSortChange} value={sortVotes}>
                        <option value="desc">Highest Rated </option>
                        <option value="asc">Lowest Rated </option>
                    </select>
                </h1>

                <div className='nowPlaying'>
                    {nowPlaying.map(el => <MovieCart elem={el} nameClass={"movieInfo"} key={el.id} />)}
                </div>

                <div className="pageButtons">
                    {page > 1 && <button className="minusBtn" onClick={()=>setPage(page - 1)}>Prev</button>}
                    <h1 style={{color: dark? "black" : "white", position: "absolute",
                        left: "610px",}}>{page}</h1>
                    {page < 100 && <button className="plusBtn" onClick={()=>setPage(page + 1)}>Next</button>}

                </div>
            </div>
        </div>
    );
};

export default NowPlaying;
