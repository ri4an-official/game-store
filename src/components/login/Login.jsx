import { useDispatch } from "react-redux"
import { login } from "../../common/redux/login-form"
import { LoginForm } from "./LoginForm"

export const Login = () => {
    const dispatch = useDispatch()
    return <div className='container'>
        <LoginForm onSubmit={(user) => dispatch(login(...user))}/>
    </div>
}