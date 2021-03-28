import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { State } from "../redux/redux-reducer";

export const useRedirect = () =>
    useSelector((state: State) => state.login.auth) || <Redirect to="/login" />;
