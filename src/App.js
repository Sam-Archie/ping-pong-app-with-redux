import Header from "./components/Header";
import Reset from "./components/Reset/";
import Player1 from "./components/ScoreCard/Player1.js";
import Player2 from "./components/ScoreCard/Player2.js";
import WinnerMessage from "./components/Winner/";
import Settings from "./components/Settings/";


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
