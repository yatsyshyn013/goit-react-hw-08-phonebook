import { useDispatch } from "react-redux"
import { Label, RegisterButton, RegisterInput, StyledRegisterForm } from "./RegisterForm.styled"
import { registerFetch } from "../../redux/auth/authOperations";


export const RegisterForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget;
        dispatch(registerFetch({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        }))
        form.reset()
    }

    return (
        <StyledRegisterForm onSubmit={handleSubmit}>
             <Label >
                Username
                <RegisterInput type="text" name="name" />
            </Label>
            <Label>
                Email
                <RegisterInput type="email" name="email"/>
            </Label>
            <Label>
                Password
                <RegisterInput type="password" name="password"/>
            </Label>
            <RegisterButton type="submit">Register</RegisterButton>
        </StyledRegisterForm>
    )
}