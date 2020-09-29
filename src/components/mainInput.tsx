import React from "react";
import { Link } from "react-router-dom";

interface Props {
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

function MainInput({ password, setPassword }: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                <Link to="/password-input">
                    <button type="submit"> Submit</button>
                </Link>
            </form>
        </div>
    );
}

export default MainInput;
