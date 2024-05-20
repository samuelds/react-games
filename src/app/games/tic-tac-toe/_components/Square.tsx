'use client';

import React, { useState } from 'react';

import './square.css';

const Square = ({ id }: { id: number }) => {

    const [value, setValue] = useState(null);

    const handleClick = () => {
        console.log('click', id);
    };

    return (
        <button className="square" onClick={handleClick}></button>
    );

};

export default Square;