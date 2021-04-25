import { Component } from "react"
import { Error } from "./Error"
export class ErrorHandler extends Component {
    state = { hasError: false, error: "" }

    componentDidCatch = (_: any, error: any) =>
        this.setState({ hasError: true, error })

    static getDerivedStateFromError = (error: any) => ({
        hasError: true,
        error,
    })

    render = () =>
        this.state.hasError ? (
            <Error>{globalThis.Error(this.state.error)}</Error>
        ) : (
            this.props.children
        )
}
