import React, { useState } from 'react';

const Settings = ({hasStarted}) => {

    let [playerOneName, setPlayerOneName] = useState("");
    let [playerTwoName, setPlayerTwoName] = useState("");
    let [winningScore, setWinningScore] = useState("21");
    let [servingNumber, setServingNumber] = useState("5");


    const handleChangePlayerOne = (e) => {
        setPlayerOneName(e.currentTarget.value);
    }
    const handleChangePlayerTwo = (e) => {
        setPlayerTwoName(e.currentTarget.value);
    }
    const handleServingNumber = (e) => {
        setServingNumber(e.currentTarget.value);
    }
    const handleWinningScore = (e) => {
        setWinningScore(e.currentTarget.value);
    }

    const submit = (e) => {
        
        const data = {
            playerOneName: playerOneName,
            playerTwoName: playerTwoName,
            winningScore: winningScore,
            servingNumber: servingNumber,
        }

        e.preventDefault();
        hasStarted(data);
    }

    return (
        <form className="form-group"  onSubmit={ submit }>
            <label htmlFor="playerOne">Player 1 Name</label>
            <input  
            className="form-control" 
            type="text" 
            id="playerOne" 
            name="playerOne" 
            onChange={handleChangePlayerOne} 
            value={playerOneName}/>

            <label htmlFor="playerTwo">Player 2 Name</label>
            <input 
            className="form-control" 
            type="text" 
            id="playerTwo" 
            name="playerTwo" 
            onChange={handleChangePlayerTwo} 
            value={playerTwoName}
            />

            <label htmlFor="score">Winning Score</label>
            <input  
            className="form-control" 
            type="number" 
            id="score"
            name="score"
            onChange={handleWinningScore} 
            value={winningScore}/>

            <label htmlFor="alternate">Alternate</label>
            <select 
            className="form-control" 
            id="alternate" 
            name="alternate" 
            onChange={handleServingNumber}  
            value={servingNumber}>

                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>

            </select>
            <button className="btn btn-primary">Start Game</button>
        </form>
    );
};

export default Settings;