/*import { useNavigate } from "react-router-dom";

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {

    const isAuth = false;
    const navigate = useNavigate()

    if (isAuth) {
        return children;
    } else {
        navigate('/login');
        return null;
    }
}*/


import { Navigate } from "react-router-dom";

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {

    const isAuth = true;   

    if (isAuth) {
        return children;
    } else {
        return <Navigate to="/login"/>
    }
}