'use client';

import React, { useState } from 'react';
import './square.css';

const Square = ({ id }: { id: number }) => {

    const [value, setValue] = useState(null);
    console.log('render', id);


    const handleClick = () => {
        console.log('click', id);
    };

    return (
        <button className="square" onClick={handleClick}></button>
    );

};

export default Square;