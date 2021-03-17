import Header from "./components/Header";
import Reset from "./components/Reset/";
import Player1 from "./components/ScoreCard/Player1.js";
import Player2 from "./components/ScoreCard/Player2.js";
import WinnerMessage from "./components/Winner/";


const App = () => (
<>
      <Header />

      <div className="row mb-4">

          <Player1
            playerNum={1}
          />
          <Player2 
            playerNum={2}
             />

      </div>

      <Reset/>
      <WinnerMessage />

</>
);

export default App;
