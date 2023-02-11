import PlayerBase from './component/PlayerBase';
import './css/App.css';
import Line from './component/Line.js';
import CenterBox from './component/CenterBox.js';


function App() {
  return (
    <>
      <div className='outerBox'>
        <PlayerBase width="315px" color="red" gotiBaseId={['redGB1', 'redGB2', 'redGB3', 'redGB4']} />
        <div style={{ "display": "flex" }}>

          <Line type="column" boxId={['b6', 'b5', 'b4', 'b3', 'b2', 'b1']} />
          <Line boxId={['b7', 'greenM1', 'greenM2', 'greenM3', 'greenM4', 'greenM5']} type="column" color="green" innerColor="green" />
          <Line boxId={['b8', 'b9', 'b10', 'b11', 'b12', 'b13']} type="column" color="green" />
        </div>

        <PlayerBase width="315px" color="green" gotiBaseId={['greenGB1', 'greenGB2', 'greenGB3', 'greenGB4']} />
        <div style={{
          'display': 'flex',
          'flexFlow': 'column',
          'justifyContent': 'center'
        }}>

          <Line boxId={['b47', 'b48', 'b49', 'b50', 'b51', 'b52']} type="row" color="red" />
          <Line boxId={['b46', 'redM1', 'redM2', 'redM3', 'redM4', 'redM5']} type="row" color="red" innerColor="red" />
          <Line boxId={['b45', 'b44', 'b43', 'b42', 'b41', 'b40']} type="row" />
        </div>
        <CenterBox />
        <div style={{
          'display': 'flex',
          'flexFlow': 'column',
          'justifyContent': 'center'
        }}>
          <Line boxId={['b14', 'b15', 'b16', 'b17', 'b18', 'b19']} type="row" />
          <Line boxId={['b20', 'yellowM1', 'yellowM2', 'yellowM3', 'yellowM4', 'yellowM5']} type="row-reverse" color="yellow" innerColor="yellow" />
          <Line boxId={['b21', 'b22', 'b23', 'b24', 'b25', 'b26']} type="row-reverse" color="yellow" />
        </div>
        <PlayerBase width="315px" color="blue" gotiBaseId={['blueGB1', 'blueGB2', 'blueGB3', 'blueGB4']} />

        <div style={{ "display": "flex" }}>

          <Line boxId={['b34', 'b35', 'b36', 'b37', 'b38', 'b39']} type="column-reverse" color="blue" />
          <Line boxId={['b33', 'blueM1', 'blueM2', 'blueM3', 'blueM4', 'blueM5']} type="column-reverse" color="blue" innerColor="blue" />
          <Line boxId={['b32', 'b31', 'b30', 'b29', 'b28', 'b27']} type="column-reverse" />

        </div>
        <PlayerBase width="315px" color="yellow" gotiBaseId={['yellowGB1', 'yellowGB2', 'yellowGB3', 'yellowGB4']} />
      </div>
    </>
  );
}

export default App;
