import { useAuth } from "hooks/useAuth";
import { UserMenuButton, UserMenuStyled } from "./UserMenu.styled";
import { useDispatch } from "react-redux";
import { logOutFetch } from "redux/auth/authOperations";

export const UserMenu = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logOutFetch())
    }

    const {user} = useAuth()
    return (<UserMenuStyled>
        <p>Welcome, {user.name}</p>
        <UserMenuButton onClick={handleClick}>Logout</UserMenuButton>
        </UserMenuStyled>)
}