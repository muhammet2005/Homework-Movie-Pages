import React, { useState, useEffect } from 'react';
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Home = () => {
    // const [background, setBackground] = useState({})
    //
    // const getBack = ()=>{
    //     // eslint-disable-next-line no-undef
    //     axios(`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${background.poster_path}`)
    //         .then(res=>{
    //             setBackground(res.data.results)
    //         })
    // }
    // useEffect(()=>{
    //     getBack()
    // },[])
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const handleEnterKey = (e) => {
            if (e.key === "Enter" && value.trim() !== "") {
                navigate(`/movie-search/${value}`);
            }
        };

        // Add an event listener for keydown
        document.addEventListener('keydown', handleEnterKey);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleEnterKey);
        };
    }, [value, navigate]);

    const handleSearch = () => {
        if (value.trim() !== "") {
            navigate(`/movie-search/${value}`);
        }
    };

    return (
        // <div id={"home"} style={{
        //     // eslint-disable-next-line no-undef
        //     background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${background.backdrop_path}")`,
        //     backgroundRepeat:"no-repeat",
        //     backgroundSize: "cover",
        //     backgroundImage: "left",
        //     height: "100vh",
        //     objectFit: "cover",
        // }}>
        <div id={"home"}>
            <div className="container">
                <h1 className={"home_title"}>Home</h1>
                <div className="home">
                    <h1>Добро пожаловать..</h1>
                    <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>

                    <input
                        type="search"
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={"Search movie..."}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>

            <Hero />
        </div>
    );
};

export default Home;
