import React from 'react';
import {NavLink} from "react-router-dom";

const MovieCart = ({elem,nameClass}) => {
    return (
        <div >

            <div  key={elem.id}>
                <NavLink to={`/movie-detail/${elem.id}`} className={nameClass} >
                    <img  loading="lazy" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${elem.poster_path}`} alt="" />

                </NavLink>
            </div>
        </div>
    );
};

export default MovieCart;