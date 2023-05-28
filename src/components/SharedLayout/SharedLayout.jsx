import { Suspense } from "react";
import { Link, Outlet, NavLink} from "react-router-dom";
import { Header, StyledLinks } from "./SharedLayout.styled";
import { AppBar } from "components/AppBar/AppBar";

const SharedLayout = () => {
    return <div>
        <AppBar/>
         <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
    </div>
}

export default SharedLayout