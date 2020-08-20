import React, { useState } from "react";
import PasswordInput from "./components/passwordInput";
import "./App.css";
import MainInput from "./components/mainInput";
import WelcomeScreen from "./components/welcomeScreen";

function App() {
    const [password, setPassword] = useState("");
    const [enteredPassword, setEnteredPassword] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSuccess = () => {
        setSuccess(true);
    };

    if (success) {
        return <WelcomeScreen />;
    }

    if (enteredPassword) {
        return <PasswordInput password={password} onSuccess={handleSuccess} />;
    }

    return (
        <>
            <MainInput
                password={password}
                setPassword={setPassword}
                setEnteredPassword={setEnteredPassword}
            />
        </>
    );
}

export default App;
