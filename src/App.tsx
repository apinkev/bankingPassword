import React, { useState } from "react";
import PasswordInput from "./components/passwordInput";
import "./App.css";
import MainInput from "./components/mainInput";
import WelcomeScreen from "./components/welcomeScreen";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
    const [password, setPassword] = useState("");
    const [entered, setEntered] = useState(false);

    const handleSuccess = () => {
        setEntered(true);
    };
    return (
        <BrowserRouter>
            <Switch>
                {entered && (
                    <Redirect from="/password-input" to="/welcome-screen" />
                )}
                <Route exact path="/">
                    <MainInput password={password} setPassword={setPassword} />
                </Route>
                <Route path="/password-input">
                    <PasswordInput
                        password={password}
                        onSuccess={handleSuccess}
                    />
                </Route>

                <Route
                    render={() =>
                        password.length ? (
                            <WelcomeScreen />
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/"
                                }}
                            />
                        )
                    }
                    path="/welcome-screen"
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
