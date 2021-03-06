export const reset = () => {
    return {
        type: "RESET"
    };
};

export const player = (num) => {
    return {
        type: "SCORE",
        player: `player${num}`,
    };
};

export const start = (data) => {
    return {
        type: "START",
        payload: data,
    }
}

