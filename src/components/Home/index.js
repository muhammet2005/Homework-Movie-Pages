import React from 'react';
import Hero from "./Hero";
import "./style.scss"
// import axios from "axios";

const Home = ({dark}) => {



    return (
        <div id={"home"}>
            <div className="container">
                <h1 style={{color: dark? "black" : "white"}} className={"home_title"}>Home</h1>
                <div className="home">
                    <h1 style={{color: dark? "black" : "white"}}>Добро пожаловать..</h1>
                    <h3 style={{color: dark? "black" : "white"}}>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>



                </div>
            </div>

            <Hero  dark={dark}/>
        </div>
    );
};

export default Home;