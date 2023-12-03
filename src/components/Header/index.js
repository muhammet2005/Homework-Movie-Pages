// Header.js
import React, {useEffect, useState} from 'react';
import "./style.css";
import Logo from "../../assets/img/popCorn.png";
import {NavLink, useNavigate} from "react-router-dom";

const Header = ({dark,setDark}) => {

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
    const body = ()=> {
        document.body.style.background = dark ? "#dacece" : "#222"
        document.body.style.transition = "1"
    }
    body()

    return (
        <div id="header"   >
            <div className={"container"}>
                <div className="header" style={{
                    borderBottom: dark? `1px solid black` : `1px solid white`
                }}>
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="nav-bar" >
                        <NavLink to={"/"} style={{
                            color: dark ? "black" : "white"
                        }}>Home</NavLink>


                        <NavLink to={"/popular"} style={{
                            color: dark ? "black" : "white"
                        }}> Popular </NavLink>


                        <NavLink to={"/now_playing"} style={{
                            color: dark ? "black" : "white"
                        }}> Now Playing </NavLink>
                        <NavLink to={"/up_coming"} style={{
                            color: dark ? "black" : "white"
                        }}> Up Coming </NavLink>
                        <NavLink to={"/top_rated"} style={{
                            color: dark ? "black" : "white"
                        }}> Top Rated </NavLink>
                    </div>
                    <input className={"headerInput"}
                        type="search"
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={"Search movie..."}
                    />
                    <button  style={{cursor: "pointer"}} className={"searchBtn"} onClick={handleSearch}>Search</button>
                    <div className="btn">
                        <button onClick={()=>{
                            setDark(!dark)
                         }}  style={{
                             cursor:"pointer",
                            width: '100px',
                            backgroundColor: dark ? '#222' : '#c9b7b7',
                            color: dark ? '#c9b7b7' : '#222', }}>

                            {dark ? 'Dark' : 'White'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
