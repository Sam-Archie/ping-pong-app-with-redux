import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./data/store";



// let state = store.getState(); 

  ReactDOM.render(
        <React.StrictMode>
          <Provider store={ store }>
            <App 
            playerOneScores={() => store.dispatch({ type: "SCORE", player: "player1" })} 
            playerTwoScores={() => store.dispatch({ type: "SCORE", player: "player2" })}
            // server={ state.server }
            // playerOneDisplayScore={ state.player1 }
            // playerTwoDisplayScore={ state.player2 }
            // player1Wins={ state.player1Wins }
            // player2Wins={ state.player2Wins }
            />
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')

      );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
