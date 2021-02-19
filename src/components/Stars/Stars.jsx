import React from 'react';
import './stars.css';
import { Star } from './Star/Star';

const defineStars = (value) => {
    let content = [];    
    for (let i = 0; i < value; i++) {
        content.push(<Star />)
    }
    return content;
}

const ruleStars = (value) => {
    if (value >= 1 && value <= 5) return true;
    return false;
}

export const Stars = (props) => {
    const { count } = props;

    const starsElement = <ul className='card-body-stars'>
                            {defineStars(count)}
                        </ul>;


    return (
        <>
            {ruleStars(count) && starsElement}
        </>
    )
}
