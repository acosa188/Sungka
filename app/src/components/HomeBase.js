import React from 'react';

const HomeBase = props =>{
    const { team, score} = props
    return(
    <div className="d-flex h-100 justify-content-center align-items-center">
        <h1 className="display-4 text-light">{score}</h1>
    </div>
    );
}

export default HomeBase;