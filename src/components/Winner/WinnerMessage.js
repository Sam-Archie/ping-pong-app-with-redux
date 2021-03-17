import React from 'react';

const WinnerMessage = ({ playerWins }) => {

    return(
        <div>
            {playerWins > 0 ? <h2 className="alert alert-success">{playerWins === 1 ? "Player 1 Wins" : null}{ playerWins === 2 ? "Player 2 Wins" : null}</h2> : null}
        </div>
    )
};
export default WinnerMessage;