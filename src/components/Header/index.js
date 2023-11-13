import React, { useState } from 'react';
import "./style.css";
import Logo from "../../assets/img/popCorn.png";
import { NavLink } from "react-router-dom";
import Button from "../Pages/Button";

const Header = () => {

    return (
        <div id="header">
            <div className={"container"}>
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="nav-bar">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/popular"}>Popular</NavLink>
                        <NavLink to={"/now_playing"}>Now Playing</NavLink>
                        <NavLink to={"/up_coming"}>Up Coming</NavLink>
                        <NavLink to={"/top_rated"}>Top Rated</NavLink>
                    </div>
                    <div className="btn">
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
