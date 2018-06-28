import React from 'react';

import './index.css';

export default function OpBtns({ toggleStrict, isStrict }) {
    return (
        <div className="ops-container">
            <button className="ops-btn">Start</button>
            <button className="ops-btn">Reset</button>
            <button 
            className={`ops-btn ${isStrict ? 'strict' : ''}`} 
            onClick={toggleStrict}>Strict</button>
        </div>
    )
}