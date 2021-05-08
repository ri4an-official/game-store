import { createEvent, createStore } from "effector"
export interface Todo {
    id: number
    content: string
    completed: boolean
}
export const addTodo = createEvent<string>()
export const deleteTodo = createEvent<number>()
export const completeTodo = createEvent<number>()
export const incompleteTodo = createEvent<number>()
export const clear = createEvent()

export const $all = createStore<Todo[]>([])
    .on(addTodo, (state, content) => [
        { id: state.length, content, completed: false },
        ...state,
    ])
    .on(deleteTodo, (state, id) => state.filter((t) => t.id !== id))
    .on(completeTodo, (state, id) =>
        state.map((t) => (t.id === id ? { ...t, completed: true } : t))
    )
    .on(incompleteTodo, (state, id) =>
        state.map((t) => (t.id === id ? { ...t, completed: false } : t))
    )
    .reset(clear)

export const $completed = $all.map((todos) => todos.filter((t) => t.completed))
export const $incompleted = $all.map((todos) => todos.filter((t) => !t.completed))
