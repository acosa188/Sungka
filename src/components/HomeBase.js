import React from 'react';
import '../css/HomeBase.css';

const HomeBase = props =>{
    const { team, score} = props
    return(
    <div className="d-flex justify-content-center align-items-center">
        <h2 className="base-bg display-4 text-light home-score-text">{score}</h2>
    </div>
    );
}

export default HomeBase;