import { createEffect, createEvent, createStore } from "effector"

export const addMessage = createEvent<string>()
export const deleteMessage = createEvent<number>()
export const reset = createEvent()

export const getDataFx = createEffect(async (url: string) =>
    (await fetch(url)).json()
)

export const $messages = createStore([] as string[])
    .on(addMessage, (state, msg) => [...state, msg])
    .on(deleteMessage, (state, index) => state.filter((_, i) => i !== index))
    .on(getDataFx.done, (_, data) => console.log(data.result))
    .on(getDataFx.fail, (_, data) => console.log(data.error))
    .reset(reset)
$messages.watch(console.log)
