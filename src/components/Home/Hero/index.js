import React from 'react';
import "./style.css"

const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--title">
                        <h1>В Тренде</h1>

                        <div className="sliders">
                            <label className="switch">
                                <input type="checkbox" className="switch__input"/>
                                <span className="switch__slider"></span>
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;