'use client';

import { FormEvent } from 'react';
import { createGame } from '@/app/games/tic-tac-toe/_actions/gameActions';

const Page = () => {
    
    const handleCreateGame = async (e: FormEvent) => {
        e.preventDefault();
        const game = await createGame();
        console.log(game);
    }
        
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <p>Create a game to play Tic Tac Toe.</p>
            <button onClick={handleCreateGame}>Create</button>
            <p>Join a game with a friend to play Tic Tac Toe.</p>
            <p>Party :</p>
            <form>
                <input type="text" />
                <button>Join</button>
            </form>
        </div>
    );
}

export default Page;