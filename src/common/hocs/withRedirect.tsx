import { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { State } from "../redux/redux-reducer";

export const withRedirect = (Component: FC<any>) => (props?: any) =>
    useSelector((state: State) => state.login.auth) ? (
        <Component {...props} />
    ) : (
        <Redirect to="/login" />
    );
