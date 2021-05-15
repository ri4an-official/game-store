import { fxGetGames } from "../models/games"
import { gamesApi } from "../redux/api"

test("Games aren't null", async () => {
    expect((await fxGetGames()).length).toBe(20)
})
test("Game details isn't null", async () => {
    expect((await gamesApi.details("portal")).slug).toBe("portal")
    expect((await gamesApi.details("bioshock")).slug).toBe("bioshock")
})
