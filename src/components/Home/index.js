import React from 'react';

const Home = () => {
    return (
        <div id={"home"}>
            <div className="container">
                <h1>Home</h1>
                <div className="home">
                    <h1>Добро пожаловать..</h1>
                    <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>

                    <input type="search"/>
                    <button>Search</button>
                </div>
            </div>

        </div>
    );
};

export default Home;