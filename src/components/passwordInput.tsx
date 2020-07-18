import React, { useRef } from "react";
import "../styles/passwordInput.css";

interface Props {
    password: string;
}
const getRandomEnabledInputs = (passwordArray: string[]) => {
    const values: number[] = [];
    for (let index = 0; index < 5; index++) {
        const randomIndex = Math.floor(
            Math.random() * Math.floor(passwordArray.length)
        );
        values.push(randomIndex);
    }

    const unique = values.filter(
        (item, index) => values.indexOf(item) === index
    );

    unique.sort((a, b) => a - b);

    return unique;
};

const PasswordInput = ({ password }: Props) => {
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const passwordArray = password.split("");
    const inputArray: JSX.Element[] = [];

    const activeInputs = getRandomEnabledInputs(passwordArray);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentId = parseInt(e.target.id);
        const index = activeInputs.indexOf(currentId);
        const newInputIndex = activeInputs[index + 1];

        inputRefs.current[newInputIndex]?.focus();
    };

    for (let index = 0; index < 32; index++) {
        const element = (
            <input
                onChange={handleChange}
                autoFocus={activeInputs.indexOf(index) === 0}
                key={index}
                id={`${index}`}
                ref={element => (inputRefs.current[index] = element)}
                disabled={!activeInputs.includes(index)}
                maxLength={1}
                className={
                    activeInputs.includes(index)
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
