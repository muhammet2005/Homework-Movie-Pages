import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('white');

    const changeColor = () => {
        setColor((prevColor) => (prevColor === 'white' ? 'black' : 'white'));
    };

    return (
        <ColorContext.Provider value={{ color, changeColor }}>
            {children}
        </ColorContext.Provider>
    );
};

export const useColor = () => {
    return useContext(ColorContext);
};
