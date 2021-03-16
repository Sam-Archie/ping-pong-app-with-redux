import React from 'react';

const WinnerMessage = ({ player1Wins, player2Wins }) => {
    return (
        <div>
             {player1Wins || player2Wins ? <h2 className="alert alert-success">{player1Wins? "Player 1 Wins" : null}{ player2Wins? "Player 2 Wins" : null}</h2> : null}
        </div>
    );
};
export default WinnerMessage;