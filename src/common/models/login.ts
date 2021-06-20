import { createEffect, createEvent, sample, restore, createStore } from "effector"
import { users } from "./api"
import { Game } from "./Game"
import { User } from "./User"

export const fxLogin = createEffect(
    async (user: { email: string; password: string }) => {
        await users.login(user.email, user.password)
        setTimeout(async () => (user = await users.me()), 3000)
        return user as User
    }
)
export const logout = createEvent()
export const buyGames = createEvent<Game[]>()
export const fxGetUsers = createEffect(async () => await users.get())

export const $users = restore<User[]>(fxGetUsers, [])
export const $currentUser = restore(fxLogin, {} as User) // { login: "Vadim"}
    .on(buyGames, (user, games) => ({
        ...user,
        games,
        sum: user.sum - games.map((g) => g.price).reduce((pv, cv) => pv + cv),
    }))
    .reset(logout)
$currentUser.watch(console.log)
export const $isLogin = sample({
    source: [$currentUser, $users],
    fn: ([user, users]) =>
        users.some((u) => u.login === user.login && u.email === user.email),
}).reset(logout)
// export const $isLogin = createStore(false)
