import React from 'react';

const SmallHole = props => {
    const { team, position, pebbles, handleMovePebbles } = props;
    return(
        <div className="d-flex h-100 justify-content-center align-items-center" onClick={() => handleMovePebbles(team, position)}>
            <h1 className="display-5 text-light">{pebbles}</h1>
        </div>
    )
}

export default SmallHole;