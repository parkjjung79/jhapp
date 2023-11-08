import logo from './logo.svg';
import './App.css';

let isrc = "https://image.jtbcplus.kr/data/contents/jam_photo/202206/13/a01e3a0a-fe86-452a-a0bd-ee43bffb3b45.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={isrc} style={{borderRadius:'50%'}}className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactsjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          루피도 React
        </a>
      </header>
    </div>
  );
}

export default App;
