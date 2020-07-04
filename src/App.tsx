import React, { useState } from "react";
import PasswordInput from "./components/passwordInput";
import "./App.css";

const App = () => {
    const [password, setPassword] = useState("");
    const [enteredPassword, setEnteredPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEnteredPassword(true);
    };

    return (
        <>
            {enteredPassword ? (
                <PasswordInput password={password} />
            ) : (
                <div>
                    <h3>Enter your password:</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            minLength={8}
                            maxLength={32}
                            value={password}
                            onChange={handleChange}
                        />
                        <input type="submit" />
                    </form>
                </div>
            )}
        </>
    );
};

export default App;
