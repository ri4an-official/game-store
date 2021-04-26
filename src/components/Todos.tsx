import { useStore } from "effector-react"
import { useState } from "react"
import { InputGroup } from "react-bootstrap"
import { useInput } from "../common/hooks/useInput"
import {
    $todos,
    addTodo,
    completeTodo,
    deleteTodo,
    incompleteTodo,
    Todo,
} from "./../common/models/model"
export const Todos = () => {
    const todos = useStore($todos)
    const inp = useInput("")
    const select = useInput("all")
    return (
        <div>
            <h1>Todo-List</h1>
            <InputGroup>
                <input {...inp} />
                <select {...select}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">Incompleted</option>
                </select>
                <button className="btn btn-primary" onClick={() => addTodo(inp.value)}>
                    Add Todo
                </button>
            </InputGroup>
            <div className="todos">
                {select.value === "all" &&
                    todos.all.map((t) => <TodoItem>{t}</TodoItem>)}
                {select.value === "completed" &&
                    todos.completed.map((t) => <TodoItem>{t}</TodoItem>)}
                {select.value === "incompleted" &&
                    todos.incompleted.map((t) => <TodoItem>{t}</TodoItem>)}
            </div>
        </div>
    )
}
const TodoItem = ({ children }: { children: Todo }) => (
    <div style={{ padding: "8px", margin: "8px" }}>
        {!children.completed ? (
            <button
                className="btn btn-success noblock"
                onClick={() => completeTodo(children.id)}
            >
                Complete&nbsp;&nbsp;
            </button>
        ) : (
            <button
                className="btn btn-danger noblock"
                onClick={() => incompleteTodo(children.id)}
            >
                Incomplete
            </button>
        )}
        <span style={{ fontSize: "24px", marginLeft: "10px" }}>{children.message}</span>
        <button
            onClick={() => deleteTodo(children.id)}
            className="right btn btn-outline-danger"
        >
            Delete
        </button>
    </div>
)
