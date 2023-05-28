import { useDispatch } from "react-redux"
import { LoginButton, LoginLabel, StyledLoginForm } from "./LoginForm.styled"
import { logInFetch } from "redux/auth/authOperations"

export const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
         e.preventDefault()
        const form = e.currentTarget;
        dispatch(logInFetch({
            email: form.elements.email.value,
            password: form.elements.password.value
        }))
        form.reset()
    }

    return (
        <StyledLoginForm onSubmit={handleSubmit}>
            <LoginLabel>
                Email
                <input type="email" name="email"/>
            </LoginLabel>
            <LoginLabel>
                Password
                <input type="password" name="password"/>
            </LoginLabel>
            <LoginButton type="submit">Log In</LoginButton>
        </StyledLoginForm>
    )
}