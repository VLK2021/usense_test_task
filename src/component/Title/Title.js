import React, {useEffect, useState} from 'react';

import './TitleStyle.css';
import {colors} from "../../constants";



const Title = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const currentColor = colors[currentColorIndex];


    return (
        <div className={'title width flex'}>
            <p style={{color: currentColor}}>usense test task</p>
        </div>
    );
};

export {Title};