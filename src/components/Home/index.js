import React from 'react';
import Hero from "./Hero";
import "./style.scss"
// import axios from "axios";

const Home = () => {



    return (
        <div id={"home"}>
            <div className="container">
                <h1 className={"home_title"}>Home</h1>
                <div className="home">
                    <h1>Добро пожаловать..</h1>
                    <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
                </div>
            </div>

            <Hero />
        </div>
    );
};

export default Home;
