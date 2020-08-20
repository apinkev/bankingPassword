import React, { useRef } from "react";
import "../styles/passwordInput.css";
import { getRandomEnabledInputs } from "./utils";

interface Props {
    password: string;
    onSuccess: () => void;
}

interface resultObject {
    [key: number]: string;
}

const PasswordInput = ({ password, onSuccess }: Props) => {
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let submission: resultObject = {};
        let result: number = 0;

        inputRefs.current.forEach((item, index) => {
            if (item?.value) {
                submission[index] = item.value;
            }
        });

        passwordArray.forEach((item, index) => {
            if (submission[index] && submission[index] === item) {
                result += 1;
            }
        });

        if (result === activeInputs.length) {
            onSuccess();
        }
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
                onFocus={e => e.target.select()}
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

    return (
        <div className="password-container">
            <form onSubmit={handleSubmit}>
                {inputArray}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default PasswordInput;
