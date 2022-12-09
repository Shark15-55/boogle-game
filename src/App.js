import { useState } from "react";
import Board from "./Board";
import { getRound } from "./dice";
import "./index.css";

// Note that `Qu` is one side of a die and counts as two letters in the scoring. All other letters are by themselves.
const dice =
"AAAFRS,AAEEEE,AAFIRS,ADENNN,AEEEEM,AEEGMU,AEGMNN,AFIRSY,BJKQuXZ,CCENST,CEIILT,CEILPT,CEIPST,ddhnot,dhhlor,dhlnor,dhlnor,eiiitt,emottt,ensssu,fiprsy,gorrvw,iprrry,nootuw,ooottu";

export default function App() {
  const [dices, setDices] = useState([]);

  function startNewgame() {
    const dices = getRound(dice);
    setDices(dices);
  }

  return (
    <div className="App">
      <h1>Boggle</h1>
      <button onClick={startNewgame}>New Game</button>
      <Board dices={dices} />
    </div>
  );
}
  