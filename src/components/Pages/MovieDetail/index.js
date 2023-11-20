import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { key } from '../../API/api';
import { useParams } from 'react-router-dom';
import './style.css';
import MovieTrailer from '../MovieTrailer';

const MovieDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState();
    const [showTrailer, setShowTrailer] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getId = () => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
            .then((res) => {
                setDetail(res.data);
            })

    };

    useEffect(() => {
        getId();
    }, [getId, id]);

    const toggleTrailer = () => {
        setShowTrailer(!showTrailer);
    };

    return (
        <div
            id={'movieDetail'}
            style={{
                backgroundImage: detail ? `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${detail.backdrop_path})` : '',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '70vh',
                width: '100%',
                objectFit: 'cover',
            }}
        >
            {detail && (
                <div className={'container'}>
                    <div className={'movieDetail'} style={{ margin: '20px 0 0 0' }}>
                        <div className="movieDetail--img">
                            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail.poster_path}`} alt="" />
                        </div>
                        <div className="movieDetail--info">
                            <h1>
                                {' '}
                                <span style={{ color: 'green' }}>Name of the movie : </span>
                                {detail.title}
                            </h1>
                            <p>
                                {' '}
                                <span style={{ color: 'green' }}>Release date: </span> {detail.release_date}
                            </p>
                            <p>
                                {' '}
                                <span style={{ color: 'green' }}>Description: </span> <br />
                                {detail.overview}
                            </p>

                            <div className="vote">
                                <p style={{ color: 'green' }}>Average vote: </p>
                                <div>
                                    <p>{Math.round(detail.vote_average) + ' of 10'}</p>
                                </div>
                            </div>

                            <div className="howManyVotes">
                                <p style={{ color: 'green' }}> All votes: </p>
                                <div>
                                    <p>{detail.popularity}</p>
                                </div>
                            </div>

                            {/* Add the button to toggle MovieTrailer */}
                            <button onClick={toggleTrailer} style={{ background: "green", border: "none",color: "white", padding: "10px 30px", fontSize: "18px"}}>Show Trailer</button>
                        </div>
                    </div>
                    <div className={'move'} style={{ padding: '0 0 100px 0 ' }}>
                        {/* Conditionally render MovieTrailer based on showTrailer state */}
                        {showTrailer && <MovieTrailer />}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetail;
