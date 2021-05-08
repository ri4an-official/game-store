import { useStore } from "effector-react"
import { FormControl, InputGroup, Button } from "react-bootstrap"
import { useInput } from "../common/hooks/useInput"
import {
    $all,
    $completed,
    $incompleted,
    addTodo,
    clear,
    completeTodo,
    deleteTodo,
    incompleteTodo,
    Todo,
} from "./../common/models/model"
export const Todos = () => {
    const all = useStore($all)
    const completed = useStore($completed)
    const incompleted = useStore($incompleted)
    const { error, ...inp } = useInput("", true)
    const select = useInput("all")
    return (
        <>
            <h1>Todo-List</h1>
            <InputGroup>
                <FormControl
                    {...inp}
                    onKeyPress={(e: any) =>
                        e.key === "Enter" && inp.value && addTodo(inp.value)
                    }
                    placeholder="Todo..."
                    type="input"
                />
                <span className="red">{error}</span>
                <select {...select}>
                    <option value="all">All ({all.length})</option>
                    <option value="completed">Completed ({completed.length})</option>
                    <option value="incompleted">
                        Incompleted ({incompleted.length})
                    </option>
                </select>
                <Button
                    variant="outline-primary"
                    onClick={() => inp.value && addTodo(inp.value)}
                >
                    Add Todo
                </Button>
                <Button variant="outline-secondary" onClick={() => clear()}>
                    Clear Todos
                </Button>
            </InputGroup>
            <div className="todos">
                {select.value === "all" && all.map((t) => <TodoItem>{t}</TodoItem>)}
                {select.value === "completed" &&
                    completed.map((t) => <TodoItem>{t}</TodoItem>)}
                {select.value === "incompleted" &&
                    incompleted.map((t) => <TodoItem>{t}</TodoItem>)}
            </div>
        </>
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
        <span
            style={{
                fontSize: "24px",
                margin: "15px",
                padding: "15px",
                color: children.completed ? "gray" : "black",
            }}
        >
            {children.content}
        </span>
        <button
            onClick={() => deleteTodo(children.id)}
            className="right btn btn-outline-danger"
        >
            Delete
        </button>
    </div>
)
