import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";

const initial = {
  player1: 0,
  player2: 0,
  server: true,
  player1Wins: false,
  player2Wins: false,
};

const playerScores = (state , {player}) => {

    return {
        ...state,
        [player]: state[player] + 1,
   
      }
    }

const server = (state) => {

    return {
        ...state, 
        server:  Math.floor((state.player1 + state.player2) / 5) % 2 === 0
    }
}

const winner = (state) => {
  
  return {
      ...state,
        player1Wins: state.player1 >= 21 && state.player1 > state.player2,
        player2Wins: state.player2 >= 21 && state.player2 > state.player1,
  }

}

const reducer = (state, action) => {
    switch (action.type) {

      case "SCORE" : return winner(server(playerScores(state, action)));

      case "RESET" : return initial;

      default : return state;
    }
}

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const render = () => {
  let state = store.getState();
      
  ReactDOM.render(
        
        <React.StrictMode>
          <App 
          playerOneScores={() => store.dispatch({ type: "SCORE", player: "player1" })} 
          playerTwoScores={() => store.dispatch({ type: "SCORE", player: "player2" })}
          server={ state.server }
          reset={() => store.dispatch({ type: "RESET" })}
          playerOneDisplayScore={ state.player1 }
          playerTwoDisplayScore={ state.player2 }
          player1Wins={ state.player1Wins }
          player2Wins={ state.player2Wins }
          />
        </React.StrictMode>,
        document.getElementById('root')

      );
  }

store.subscribe(render);

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
