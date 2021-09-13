import { createEffect, createEvent, sample, restore } from 'effector'
import { users } from './api'
import { Game } from './types/Game'
import { User } from './types/User'

const testUsers = [
    {
        login: 'admin',
        password: '123',
        sum: 10000,
        role: 'admin',
        games: [] as Game[],
    },
] as User[]

export const fxLogin = createEffect(
    async ({ email, password }: { email: string; password: string }) => {
        await users.login(email, password)
        return await users.me()
    }
)
export const logout = createEvent()
export const buyGames = createEvent<Game[]>()
export const fxGetUsers = createEffect(async () => await users.get())

export const $users = restore<User[]>(fxGetUsers.doneData, testUsers)
export const $currentUser = restore(fxLogin.doneData, testUsers[0])
    .on(buyGames, (user, games) => ({
        ...user,
        games,
        sum: user.sum - games.map((g) => g.price).reduce((pv, cv) => pv + cv),
    }))
    .reset(logout)

// guard({
//     clock: buyGames,
//     source: $currentUser,
//     filter: (user, games) =>
//         user.sum >= games.map((g) => g.price).reduce((pv, cv) => pv + cv),
// })

export const $isLogin = sample({
    source: [$currentUser, $users],
    fn: ([user, users]) =>
        users.some((u) => u.login === user.login && u.password === user.password),
}).reset(logout)
