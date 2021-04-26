import { combine, createEvent, createStore } from "effector"

export type Todo = {
    id: number
    message: string
    completed: boolean
}
export const addTodo = createEvent<string>()
export const deleteTodo = createEvent<number>()

export const completeTodo = createEvent<number>()
export const incompleteTodo = createEvent<number>()

export const $todos = combine(
    {
        all: createStore<Todo[]>([])
            .on(addTodo, (state, todo) => [
                { id: Date.now(), message: todo, completed: false },
                ...state,
            ])
            .on(deleteTodo, (state, id) => state.filter((t) => t.id !== id))
            .on(completeTodo, (state, id) =>
                state.map((t) => (t.id === id ? { ...t, completed: true } : t))
            )
            .on(incompleteTodo, (state, id) =>
                state.map((t) => (t.id === id ? { ...t, completed: false } : t))
            ),
        completed: createStore<Todo[]>([]),
        incompleted: createStore<Todo[]>([]),
    },
    ({ all }) => ({
        all,
        completed: all.filter((t) => t.completed),
        incompleted: all.filter((t) => !t.completed),
    })
)
