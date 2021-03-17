import Header from "./components/Header";
import Reset from "./components/Reset/";
import Player1 from "./components/ScoreCard/Player1.js";
import Player2 from "./components/ScoreCard/Player2.js";
import PlayerOneWins from "./components/Winner/PlayerOneWins.js";
import PlayerTwoWins from "./components/Winner/PlayerTwoWins.js";
import PlayerWins from "./components/Winner/PlayerWins.js";


const App = ({ playerOneScores, playerTwoScores, player1Wins, player2Wins }) => (
<>
      <Header />

      <div className="row mb-4">
          
          <Player1
            handleClick={ playerOneScores } 
            player={1}
          />
          <Player2 
            handleClick={ playerTwoScores } 
            player={2}
             />
      </div>

      <Reset/>
      
      <PlayerWins />

</>
);

export default App;
