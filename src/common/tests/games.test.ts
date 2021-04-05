import { Game } from "../models/Game"
import gamesReducer, { setGames } from "../redux/games-reducer"
let state = {
    games: [] as Game[],
    isFetch: true,
}
beforeEach(() => {
    state = {
        games: [] as Game[],
        isFetch: true,
    }
})
test("Games", () => {
    state = gamesReducer(state, setGames([]))
    expect(state.games).toStrictEqual([])
})
