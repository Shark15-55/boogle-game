import { useState } from "react";
import Board from "./Board";
import { getRound } from "./dice";
import "./index.css";


// Note that `Qu` is one side of a die and counts as two letters in the scoring. All other letters are by themselves.
const dice =
"AAAFRS,AAEEEE,AAFIRS,ADENNN,AEEEEM,AEEGMU,AEGMNN,AFIRSY,BJKQuXZ,CCENST,CEIILT,CEILPT,CEIPST,DDHOT,DHHLOR,DHLNOR,DHLNOR,EIIITT,EMOTTT,ENSSSU,FIPRSY,GORRVW,IPRRRY,NOOTUW,OOOTTU";

export default function App() {
  const [dices, setDices] = useState([]);

  function startNewgame() {
    const dices = getRound(dice);
    setDices(dices);
  }

  function TweetForm({ addWordLog }) {

    const [word, setWord] = useState("");
  
    const handleSubmit = (e) => {
      console.log("In handleSubmit")
      addWordLog([word])
      e.preventDefault();
    }
    return (
      <form onSubmit= {e => { handleSubmit(e) }}>
        <label>Words:</label>
        <br />
        <input 
          name='wordDesc'
          type='word'
          value= { word }
          onChange= {e => setWord(e.target.value)}
        />
        <br />
        <label>Submit</label>
        <br />
        <input
          type='submit'
          value='submit'
        />
      </form>
    )
  }
  
  function TweetChart(props) {
    return(
      <table>
        <thead>
          <tr>
            <th>Words:</th>
          </tr>
        </thead>
        <tbody>
        {props.word.map(row => {
          const [word] = row
          return (
            <tr>
              <td>{word}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }



    const [wordLog, setWordLog] = useState([]);
  
    const addWordLog = (log) => {
      let logs = [...wordLog, log]
      setWordLog(logs)
    }
  
    
    console.log(wordLog)
  
    return (
    <div className="App">
      <h1>Boggle</h1>
      <button onClick={startNewgame}>New Game</button>
      <Board dices={dices} />
      <TweetForm addWordLog={addWordLog} />
      <TweetChart word={wordLog} />
    </div>

  );
}
  