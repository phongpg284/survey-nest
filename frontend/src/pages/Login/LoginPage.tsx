import { useAppSelector } from "app/store"
import { Redirect } from "react-router";
import Login from "../../components/Login"
import "./index.scss"
const LoginPage = () => {
    const account = useAppSelector(state => state.account);
    return (
        <>
            {!account.accessToken &&(
                <div className="login-page">
                    <Login />
                </div>
            )}
            {account.accessToken && <Redirect to="/" />}
        </>
    )
}

export default LoginPage