import PlayerBase from './component/PlayerBase';
import './css/App.css';
import Line from './component/Line.js';
import CenterBox from './component/CenterBox.js';


function App() {
  return (
    <>
      <div className='outerBox'>
        <PlayerBase width="315px" color="red" />
        <div style={{ "display": "flex" }}>

          <Line type="column" />
          <Line type="column" color="green" innerColor="green" />
          <Line type="column" color="green" />
        </div>

        <PlayerBase width="315px" color="green" />
        <div style={{
          'display': 'flex',
          'flexFlow': 'column',
          'justifyContent': 'center'
        }}>

          <Line type="row" color="red" />
          <Line type="row" color="red" innerColor="red" />
          <Line type="row" />
        </div>
        <CenterBox />
        <div style={{
          'display': 'flex',
          'flexFlow': 'column',
          'justifyContent': 'center'
        }}>
          <Line type="row" />
          <Line type="row-reverse" color="yellow" innerColor="yellow" />
          <Line type="row-reverse" color="yellow" />
        </div>
        <PlayerBase width="315px" color="blue" />

        <div style={{ "display": "flex" }}>

          <Line type="column-reverse" color="blue" />
          <Line type="column-reverse" color="blue" innerColor="blue" />
          <Line type="column-reverse" />

        </div>
        <PlayerBase width="315px" color="yellow" />
      </div>
    </>
  );
}

export default App;
