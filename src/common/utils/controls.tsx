import { Form } from "react-bootstrap"

export const Input = ({ field }: any) => (
    <Form.Control
        placeholder="Enter title of the game..."
        {...field}
        required 
        type="input"
    />
)
