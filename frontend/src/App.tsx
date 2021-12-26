import "./App.css";
import { createContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useAppSelector } from "./app/store";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import Main from "pages/Main";
import { Home } from "components/Home";
import PrivateRoute from "pages/PrivateRoute";
import Survey from "components/Survey/Survey";
export const FooterContext = createContext<any>(null);

function App() {
    const { accessToken } = useAppSelector((state) => state.account);
    const [isAuth, setIsAuth] = useState(true);
    const [route, setRoute] = useState("/");
    const footerRef = useRef<any>();

    useEffect(() => {
        setRoute(window.location.pathname);
    }, [window.location.pathname]);

    useEffect(() => {
        if (accessToken) setIsAuth(true);
        else setIsAuth(false);
    }, [accessToken]);

    return (
        <div className="App">
            <FooterContext.Provider value={footerRef}>
                <BrowserRouter>
                    {!isAuth && route !== "/" && <Redirect to="/login" />}
                    <Switch>
                        <Route exact path="/login" component={LoginPage} />
                        <Route exact path="/signup" component={SignupPage} />
                        <Route exact path="/survey" component={Survey} />
                        <Main exact path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </FooterContext.Provider>
        </div>
    );
}

export default App;
