import initial from "./initial";


const playerScores = (state , {player}) => {

    return {
        ...state,
        [player]: state[player] + 1,
   
      }
    }

const server = (state) => {

    return {
        ...state, 
        server:  Math.floor((state.player1 + state.player2) / 5) % 2 === 0 ? 1 : 2
    }
}

const wins = (state) => {

  if (state.player1 >= 21 && state.player1 > state.player2) {
    return {
      ...state,
      playerWins : 1,
    }
  }

  else if (state.player2 >= 21 && state.player2 > state.player1) {
    return {
      ...state,
      playerWins: 2,
    };

  } else {
    return {
      ...state,
      playerWins: 0,
    }
  }
}

const startGame = (state, {payload}) => {

  return {
    ...state,
    hasStarted: true,
    playerOneName : payload.player_1.name, 
    playerTwoName : payload.player_2.name,
    winningScore : payload.winning_score,
    servingNumber : payload.change_serve,
    game_id : payload.id,
    
  }
}

const reset = (state) => {
    return {
      ...initial,
      playerOneName : state.playerOneName,
      playerTwoName : state.playerTwoName,
      winningScore : state.winningScore,
      servingNumber : state.servingNumber,

    }
}

const reducer = (state, action) => {
    switch (action.type) {

      case "SCORE" : return wins(server(playerScores(state, action)));

      case "RESET" : return reset(state);

      case "START" : return startGame(state, action);

      default : return state;
    }
}

export default reducer;