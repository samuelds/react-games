'use client';

import Square from './Square';
import './board.css';

const Board = () => {

    return (
        <div className="board">
            { Array(9).fill(null).map((_, i) => <Square id={i} key={i} />) }
        </div>
    );

};

export default Board;