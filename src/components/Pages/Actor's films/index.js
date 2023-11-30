import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { key } from '../../API/api';
import "./style.scss"
import {NavLink} from "react-router-dom";

const ActorFilms = ({ actorId }) => {
    const [films, setFilms] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getFilms = () => {
        axios
            .get(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${key}&language=en-US`)
            .then((res) => {
                // Check if res.data and res.data.cast exist before setting the state
                setFilms(res.data.cast);
            })
    };

    useEffect(() => {
        getFilms();
    }, [actorId, getFilms]);

    return (
        <>
            <div className="actorsFilms">
                <h1 style={{ color: 'green' }}>Films: </h1>
                <div className={'el--container'}>
                    {films.slice(0, 4).map((el) => (
                        <div >
                            <NavLink to={`/movie-detail/${el.id}`}>
                                <img loading="lazy" src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${el.poster_path}`} alt="" />
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ActorFilms;
