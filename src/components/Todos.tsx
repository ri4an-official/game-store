import { useStore } from "effector-react"
import { useState } from "react"
import { useInput } from "../common/hooks/useInput"
import { $todos, addTodo, completeTodo, Todo } from "./../common/models/model"
export const Todos = () => {
    const todos = useStore($todos)
    const inp = useInput("")
    const [filter, setFilter] = useState<string>("All")
    return (
        <div>
            <h1>Todo-List</h1>
            <input {...inp} />
            <button onClick={() => addTodo(inp.value)}>Add Todo</button>
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value={filter}>All</option>
                <option value={filter}>Completeted</option>
                <option value={filter}>Incompleteted</option>
            </select>
            {filter === "All" && todos.all.map((t) => <TodoItem>{t}</TodoItem>)}
            {filter === "Completed" &&
                todos.completed.map((t) => <TodoItem>{t}</TodoItem>)}
            {filter === "Incompleted" &&
                todos.incompleted.map((t) => <TodoItem>{t}</TodoItem>)}
        </div>
    )
}
const TodoItem = ({ children }: { children: Todo }) => (
    <div className="todos">
        <button
            className="btn btn-success noblock"
            onClick={() => completeTodo(children.id)}
        >
            Complete
        </button>
        <span style={{ fontSize: "28px" }}>{children.message}</span>
    </div>
)
