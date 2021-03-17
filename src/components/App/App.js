import Header from "../Header";
import Reset from "../Reset";
import Player1 from "../ScoreCard/Player1.js";
import Player2 from "../ScoreCard/Player2.js";
import WinnerMessage from "../Winner";
import Settings from "../Settings";


const App = ({ hasStarted }) => (

<>      
<Header />
        {
          hasStarted ? 
        <>
      <div className="row mb-4">
          <Player1 playerNum={1}/>
          <Player2 playerNum={2}/>
          <Reset />
          <WinnerMessage />
      </div>
          </> : <Settings />       
      }
</>
);

export default App;
