import React from 'react';

const SmallHole = props => {
    const { team, position, across_position, pebbles, handleMovePebbles } = props;
    return(
        <div className="d-flex h-100 justify-content-center align-items-center" onClick={() => handleMovePebbles(team, position, across_position)}>
            <h1 className="display-5 text-light">{pebbles}</h1>
        </div>
    )
}

export default SmallHole;