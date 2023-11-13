import React, { useState } from 'react';

const Button = ({ onToggleBackground }) => {
    const [btn, setBtn] = useState(true);

    const background = () => {
        setBtn((prev) => !prev);
        document.body.style.backgroundColor = btn ? '#222' : '#dacece';

    };
    onToggleBackground = "white"
    return (
        <div id="button">
            <button
                style={{
                    width: '100px',
                    backgroundColor: btn ? '#222' : '#c9b7b7',
                    color: btn ? '#c9b7b7' : '#222',
                }}
                onClick={background}
            >
                {btn ? 'Dark' : 'White'}
            </button>

        </div>
    );
};

export default Button;
