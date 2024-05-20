'use client';

import Board from "@/app/games/tic-tac-toe/_components/Board";
import { getGame } from "@/app/games/tic-tac-toe/_actions/gameActions";
import { useEffect } from "react";

const Page = async ({ params }: { params: { party: string } }) => {

    try {
        const game = await getGame(params.party);
        console.log(game);
    } catch (error: any) {
        console.log(error.message);
    }
    // console.log(game);

    // if (!game) {
        // return <div>Game not found</div>;
    // }

    // useEffect(() => {
    //     if (!game) {
    //         return;
    //     }
    //     console.log(game);
    // }, [game]);

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <p>Game ID: {params.party}</p>
        </div>
    );
}

export default Page;