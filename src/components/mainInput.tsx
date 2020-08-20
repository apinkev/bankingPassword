import React from "react";

interface Props {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setEnteredPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

function MainInput({ password, setPassword, setEnteredPassword }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEnteredPassword(true);
    };

    return (
        <div>
            <h3>Enter your password:</h3>
            <form onSubmit={handleSubmit}>
                <input
                    autoFocus
                    minLength={8}
                    maxLength={32}
                    value={password}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </div>
    );
}

export default MainInput;
