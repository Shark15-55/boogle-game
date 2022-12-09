export default function Board(props) {
    const { dices } = props;
    const rows = [];
    for (let i = 0; i < dices.length; i += 5) {
      rows.push(dices.slice(i, i + 5));
    }
  
return (
    <table className="game-container">
      <tbody>
        {rows.map((row) => {
          return (
            <tr className="game-row">
              {row.map((element) => {
                return <td className="game-element">{element}</td>;
              })}
            </tr>
          );
        })}
        <tr></tr>
      </tbody>
    </table>
  );
}