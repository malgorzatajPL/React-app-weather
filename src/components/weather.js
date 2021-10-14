import React from 'react';
import Lottie from 'lottie-react';
import winter from '../animations/winter.json';
import summer from '../animations/summer.json';

const CheckSeason = () => {
    const style = {
        height: 500,
    };
    const currentTemp = '10';
    const Season = [
        <Lottie animationData={winter} style={style} />,
        <Lottie animationData={summer} style={style} />,
    ];

    return currentTemp > '5' ? Season[0] : Season[1];
};

export default CheckSeason;
