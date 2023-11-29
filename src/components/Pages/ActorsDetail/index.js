// ActorsDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { key } from '../../API/api';
import { useParams } from 'react-router-dom';
import "./style.scss"

const ActorsDetail = ({dark}) => {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getDetail = () => {
        axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`)
            .then((res) => {
                setDetail(res.data);
                console.log(res)
            })

    };

    useEffect(() => {
        getDetail();
    }, [getDetail, id]);

    return (
        <div className="container">
            <div className="actorDetail" style={{color: dark ? "black" : "white" }}>
                <div className="actorImage">
                    <img loading="lazy" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.profile_path ? detail.profile_path : "Empty"}`} alt=""/>
                </div>
                <div className="actorBiography">
                    <h2 style={{color: dark ? "black" : "white" }}> <span>Name: </span> {detail.name ? detail.name : "Empty"}</h2>
                    <h3> <span>Birthday:  </span> {detail.birthday ? detail.birthday : "Empty"}</h3>
                    <h3> <span>Place of birth: </span>{detail.place_of_birth ? detail.place_of_birth : "Empty"}</h3>
                    <h3> <span>Popularity:  </span> { detail.popularity ? detail.popularity : "Empty"}</h3>
                    <p style={{color: dark ? "black" : "white" }}> <span>Biography:   </span>{detail.biography ? detail.biography : "Empty"}</p>
                </div>

                {/* Add more details as needed */}
            </div>
        </div>
    );
};

export default ActorsDetail;
