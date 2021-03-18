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

export const start = (playerOneName, playerTwoName, winningScore, servingNumber ) => {
    return {
        type: "START",
        meta: {
            playerOneName, playerTwoName, winningScore, servingNumber
        }
    }
}

