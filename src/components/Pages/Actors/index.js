import React from "react";
import "./style.scss"
import {key} from "../../API/api";
import {useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

const Actors = ({ movieId }) => {
    // Change the useParams to get the personId
    const [actors, setActors] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getActors = () => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`)
            .then((res) => {
                setActors(res.data.cast);
            })
            .catch((error) => {
                console.error("Error fetching actors:", error);
            });
    };

    useEffect(() => {
        getActors();
    }, [getActors, movieId]);

    return (
        <>
            <div className="container">
                <div className="photoContainer">
                    {actors.slice(0,5).map((el) => (
                        <div className="actorsPhoto">
                            <NavLink key={el.id} to={`/person/${el.id}`}>
                                <img  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`} alt={el.name} />
                            </NavLink>
                        </div>


                    ))}
                </div>

            </div>
        </>
    );
};

export default Actors;
