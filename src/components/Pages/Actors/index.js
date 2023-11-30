import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { key } from '../../API/api';
import { useNavigate } from 'react-router-dom';
import "./style.scss"

const Actors = ({ movieId }) => {
    const [actors, setActors] = useState([]);
    const navigate = useNavigate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getActors = () => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setActors(res.data.cast);
            })
    };

    useEffect(() => {
        getActors();
    }, [getActors, movieId]);

    return (
        <div className="container">
                <div className="photo" >
                    {actors.slice(0, 5).map((el) => (
                        <div className="actorsPhoto" key={el.id}>
                            <img
                                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`}
                                alt={el.name}
                                onClick={() => navigate(`/person/${el.id}`)}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Actors;
