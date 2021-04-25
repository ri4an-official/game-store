import { combine, createEffect, createEvent, createStore, restore } from "effector"

export const addMessage = createEvent<string>()
export const deleteMessage = createEvent<number>()
export const getDataFx = createEffect<string, any>(async (url: string) =>
    (await fetch(url)).json()
)
export const $main = combine({
    messages: createStore<string[]>([])
        .on(addMessage, (state, msg) => [msg, ...state])
        .on(deleteMessage, (state, index) => state.filter((_, i) => i !== index))
        .on(getDataFx.done, (_, data) => console.log(data.result))
        .on(getDataFx.fail, (_, data) => console.log(data.error)),
    fetch: getDataFx.pending,
})
export const $default = restore(getDataFx, "")
