import { Header, StyledLinks } from "../SharedLayout/SharedLayout.styled"
import { useAuth } from "hooks/useAuth";

export const Navigation = () => {
    const {isLoggedIn} = useAuth()

    return (<nav>
        <StyledLinks to='/' end>Home</StyledLinks>
        {isLoggedIn && (
        <StyledLinks to='/contacts'>Contacts</StyledLinks>
        )}
    </nav>)
}

// {/* <nav>
//                 <StyledLinks to='/' end>Home</StyledLinks>
//                 <StyledLinks to='/login'>Log In</StyledLinks>
//                 <StyledLinks to='/register'>Register</StyledLinks>
//                 {/* <StyledLinks to='/contacts'>Contacts</StyledLinks> */}
//                 </nav> */}