import logo from './logo.svg';
import './App.css';
import Letter from './CopyPast';

const objData = {
  nickname: "Luna",
}

const copyObjData = {...objData};
console.log("copydata",copyObjData);
const {nickname} = objData;
console.log("nickname", nickname);

function App(props) {
  console.log(props,"uhukhukjhkhkh")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Letter/>
    </div>
  );
}

export default App;
