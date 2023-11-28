import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { key } from '../../API/api';
import MovieCart from '../../Pages/MovieCart';

const MovieSearch = () => {
    const { movieName } = useParams();
    const [trailer, setTrailer] = useState([]);
    const [sort, setSort] = useState('desc');
    const [noResults, setNoResults] = useState(false);
    const [timeSelect, setTimeSelect] = useState(false);

    const handleSortChange = () => {
        setSort('asc');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function getSearch() {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res) => {
                const sortedResults = res.data.results.sort((a, b) => {
                    if (sort === 'asc') {
                        return a.vote_average - b.vote_average;
                    } else {
                        return b.vote_average - a.vote_average;
                    }
                });

                setTrailer(sortedResults);

                // Check if there are no search results
                setNoResults(sortedResults.length === 0);

                // Show the select element after a delay (e.g., 2000 milliseconds)
                setTimeout(() => {
                    setTimeSelect(true);
                }, 1000);
            })
            .catch((error) => {
                console.error('Error fetching search results:', error);
            });
    }

    useEffect(() => {
        getSearch();
    }, [getSearch, movieName, sort]);

    return (
        <div className="container">
            {noResults && (
                <p> Результат не найден на запрос "{movieName}"</p>
            )}

            {!noResults && timeSelect && (
                <>
                    <select className={'nowPlaying--selector'} onChange={handleSortChange} value={sort}>
                        <option value="desc">Highest Rated</option>
                        <option value="asc">Lowest Rated</option>
                    </select>

                    <div className="popular">
                        {trailer.map((el) => (
                            <MovieCart elem={el} nameClass={'popularMovies'} key={el.id} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default MovieSearch;
