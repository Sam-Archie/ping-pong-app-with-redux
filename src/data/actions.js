export const reset = () => {
    return {
        type: "RESET"
    };
};

export const playerOne = () => {
    return {
        type: "SCORE",
        player: "player1",
    };
};

export const playerTwo = () => {
    return {
        type: "SCORE",
        player: "player2",
    };
};