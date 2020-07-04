import React from "react";
import "../styles/passwordInput.css";

interface Props {
    password: string;
}

const PasswordInput = ({ password }: Props) => {
    const passwordArray = password.split("");
    const inputArray: JSX.Element[] = [];

    const getRandomDisabledInputs = () => {
        const values = [];
        for (let index = 0; index < 5; index++) {
            const randomIndex = Math.floor(
                Math.random() * Math.floor(passwordArray.length)
            );
            values.push(randomIndex);
        }
        return values;
    };

    const values = getRandomDisabledInputs();

    for (let index = 0; index < 32; index++) {
        const element = (
            <input
                key={index}
                disabled={!values.includes(index)}
                maxLength={1}
                className={
                    values.includes(index)
                        ? "single-character"
                        : "single-character disabled"
                }
            />
        );
        inputArray.push(element);
    }

    return <div className="password-container">{inputArray}</div>;
};

export default PasswordInput;
