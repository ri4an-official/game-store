import { FC } from "react"
import { ErrorHandler } from "../error/ErrorHandler"

export const withErrorHandler = (Component: FC<any>) => (props?: any) => (
    <ErrorHandler>
        <Component {...props} />
    </ErrorHandler>
)
