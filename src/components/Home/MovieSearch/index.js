import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {key} from "../../API/api";
import MovieCart from "../../Pages/MovieCart";

const MovieSearch = () => {
    const {movieName} = useParams()
    const [trailer, setTrailer] = useState([])
    const [sort , setSort] = useState("desc")

    const handleSortChange = ()=>{
        setSort("asc")
    }

    function getSearch(){
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then(res=>{
                const setSort = res.data.results.sort( (a,b)=>{
                    if(sort === "asc"){
                        return a.vote_average - b.vote_average
                    }else {
                        return b.vote_average - a.vote_average
                    }
                }

                )
                setTrailer(res.data.results)
                console.log(trailer)
            })
    }

    useEffect(() => {
        getSearch()
    });
    return (
        <>
            <div className="container">
                <select className={"nowPlaying--selector"} onChange={handleSortChange} value={sort}>
                    <option value="desc">Highest Rated </option>
                    <option value="asc">Lowest Rated </option>
                </select>
                <div className='popular'>
                    {trailer.map(el => <MovieCart elem={el} nameClass={"popularMovies"} key={el.id} />)}
                </div>
            </div>
        </>
    );
};

export default MovieSearch;