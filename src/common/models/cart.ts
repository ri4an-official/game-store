import { createEvent, createStore } from 'effector'
import { Game } from './types/Game'
import { buyGames } from './login'

export const addGame = createEvent<Game>()
export const deleteGame = createEvent<number>()
export const $cart = createStore<Game[]>([])
    .on(addGame, (state, game) => [game, ...state])
    .on(deleteGame, (state, id) => state.filter((g) => g.id !== id))
    .reset(buyGames)
