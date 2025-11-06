import logo from './logo.svg';
import './App.css';
import Letter from './LetterComponen';
import Texted from './TextComponent';

const objData = {
  nickname: "Luna",
}

const objDataCounter = {
  hash: 25
}


const copyObjData = {...objData};
console.log("copydata",copyObjData);
const {nickname} = objData;
console.log("nickname", nickname);

function App({...props}) {
  console.log( "PROPS", props)
  return (
    <div className="App">
      <div><Header/></div>
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
      <Letter text="ABBSBS ABSBASBS GAMALA" />
      <Letter text="SECOND TEXT" />
      <Letter text="Hallo world!" counter={objDataCounter}/>
      <Texted numberCount="5" letter="L" />
      <li>abracadabra</li>
     <h1>Elyzaveta Yakymenko</h1>
     <input type="checkbox" name="" id="" />
     <input type="date" name="" id="" />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a>Home</a>
      <a>News Feed</a>
      <a>Messages</a>
    </div>
  )
}

export default App;
