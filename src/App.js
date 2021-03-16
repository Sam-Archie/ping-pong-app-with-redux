import Header from "./components/Header";
import ScoreCard from "./components/ScoreCard";
import WinnerMessage from "./components/WinnerMessage";
import Reset from "./components/Reset";

const App = ({ playerOneDisplayScore, playerTwoDisplayScore, playerOneScores, playerTwoScores, reset, server, player1Wins, player2Wins }) => (
<>
      <Header />
      <div className="row mb-4">
        
        <ScoreCard 
        handleClick={ playerOneScores } 
        score={ playerOneDisplayScore }
        player={"Player 1"}
        server={server}/>

        <ScoreCard 
        handleClick={ playerTwoScores } 
        score={ playerTwoDisplayScore }
        player={"Player 2"}
        server={!server} />
      </div>

      <Reset reset={reset} />
      <WinnerMessage
      player1Wins={ player1Wins } 
      player2Wins={ player2Wins }
      />

</>
);

export default App;
