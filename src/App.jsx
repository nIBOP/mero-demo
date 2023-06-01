import './App.scss';
import logo from './res/logo.svg'
import arrow from './res/arrow.svg'

function App() {
  return (
    <div className="App">
      <img id='logo' src={logo} alt="MERO"/>
      <br />
      <img id='arrow' src={arrow} alt="down"/>
    </div>
  );
}

export default App;
