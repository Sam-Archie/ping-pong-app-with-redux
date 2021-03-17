import Header from "./components/Header";
import Reset from "./components/Reset/";
import Player1 from "./components/ScoreCard/Player1.js";
import Player2 from "./components/ScoreCard/Player2.js";
import PlayerWins from "./components/Winner/PlayerWins.js";


const App = () => (
<>
      <Header />
      <div className="row mb-4">
          <Player1
            player={1}
          />
          <Player2 
            player={2}
             />
      </div>

      <Reset/>
      
      <PlayerWins />

</>
);

export default App;
