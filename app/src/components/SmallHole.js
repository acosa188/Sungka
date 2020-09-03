import React from 'react';
import '../css/SmallHole.css';

const SmallHole = props => {
    const { team, position, pebbles, handleMovePebbles } = props;
    return(
        <div className="d-flex h-100 justify-content-center align-items-center " onClick={() => handleMovePebbles(team, position)}>
            <h2 className="small-hole display-5 text-light pebble-text">{pebbles}</h2>
        </div>
    )
}

export default SmallHole;