import { useStore } from "effector-react"
import { FC } from "react"
import { Redirect } from "react-router"
import { $isLogin } from "../models/login"
export const withRedirect = (Component: FC<any>) => (props?: any) =>
    useStore($isLogin) ? <Component {...props} /> : <Redirect to="/login" />
