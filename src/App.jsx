
import './App.css';
import Letter from './LetterComponen';
import Texted from './TextComponent';
import Header from "./Header";
import Technologies from './Technologies';
import Footer from './Footer';

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
      <div>
        <Header />
      <Footer />
        </div>
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

const Fruits = () => {
  return (
    <div>
      <p>Apple</p>
      <p>Pear</p>
      <p>Grape</p>
    </div>
  )
}

export default App;
