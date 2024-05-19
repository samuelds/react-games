"use server";

import { redirect } from 'next/navigation'

const games = new Map();

export async function createGame() {
    const gameId = Math.random().toString(36).substring(7);
    games.set(gameId, { squares: Array(9).fill(null) });
    redirect('/games/' + gameId);
}