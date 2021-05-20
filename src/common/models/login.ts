import { createEffect, createEvent, sample, restore } from "effector"
import { User } from "./User"

export const login = createEvent<User>()
export const logout = createEvent()
export const fxGetUsers = createEffect(
    async () => await fetch("").then((r) => r.json())
)

export const $users = restore<User[]>(fxGetUsers, [new User("Vadim", "111")])
export const $currentUser = restore(login, {} as User).reset(logout)
export const $isLogin = sample({
    source: $currentUser,
    fn: (st) =>
        $users
            .map((s) => s.some((u) => u.name === st.name && u.password === st.password))
            .getState(),
})
