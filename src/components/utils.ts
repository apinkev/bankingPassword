export const getRandomEnabledInputs = (passwordArray: string[]) => {
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
