import { $cart, addGame, deleteGame } from "../models/cart"
import { Game } from "../models/Game"
import { fxGetGames } from "../models/games"
import { $currentUser, buyGames, fxLogin } from "../models/login"
import { gamesApi } from "../models/api"

test("Games aren't null", async () => {
    expect((await fxGetGames()).length).toBe(20)
})
test("Game details isn't null", async () => {
    expect((await gamesApi.details("portal")).slug).toBe("portal")
    expect((await gamesApi.details("bioshock")).slug).toBe("bioshock")
})
test("Games search isn't null", async () => {
    expect((await gamesApi.get(1, "portal"))[0].slug).toBe("portal")
})
test("Cart works", () => {
    addGame({ id: 1 } as Game)
    expect($cart.getState().length).toBe(1)
    deleteGame(1)
    expect($cart.getState().length).toBe(0)
})
test("Profile works", () => {
    buyGames([{ id: 1 }, { id: 2 }] as Game[])
    expect($currentUser.getState().games.length).toBe(2)
})
// test("Auth works", async () => {
//     const user = { email: "redacai.38@gmail.com", password: "VadimGuber1" }
//     expect((await fxLogin(user)).login).toBe("Strife1")
// })
