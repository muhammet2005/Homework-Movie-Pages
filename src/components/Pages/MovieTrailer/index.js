import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { key } from '../../API/api';
import "../../../App.css"
import "./style.scss"
const MovieTrailer = () => {
    const [trailer, setTrailer] = useState([]);
    const { id } = useParams(); // Extract 'id' from the params object

    const getTrailer = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res) => {
                setTrailer(res.data.results);
            })
            .catch((error) => {
                console.error('Error fetching trailer:', error);
            });
    };

    useEffect(() => {
        getTrailer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]); // Include 'id' in the dependency array

    return (
        <>
            <div>
                {trailer.slice(0, 1).map((el) => (
                        <div className="trailer">
                            <iframe
                                key={el.key} // Add a key for each iframe
                                width="760"
                                height="415"
                                src={`https://www.youtube.com/embed/${el.key}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                ))}
            </div>
        </>
    );
};

export default MovieTrailer;
