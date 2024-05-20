"use server";

import { redirect } from 'next/navigation'

const parties = new Map();

export async function createGame() {
    const gameId = Math.random().toString(36).substring(7);
    const game = {
        squares: Array(9).fill(null),
        players: ['X', 'O'],
        currentPlayer: 'X',
        status: 'waiting'
    };

    parties.set(gameId, game);
    redirect('/games/tic-tac-toe/' + gameId);
}

export async function joinGame(gameId: string) {
    if (!parties.has(gameId)) {
        return { success: false, error: 'Game not found' };
    }
    redirect('/games/tic-tac-toe/' + gameId);
}

export async function getGame(gameId: string) {
    if (!parties.has(gameId)) {
        return { success: false, error: 'Game not found' };
    }
    const game = parties.get(gameId);
    return { success: true, game: game };
}