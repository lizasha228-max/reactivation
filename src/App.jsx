
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';



const App = () => {
  return (
    <div className="app-wrapper">
       <Header />
       <NavBar />
       <div className="app-wrapper-content">
        <Routes>
         <Route path='/dialogs' element={<Dialogs/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/music' element={<Music/>}/>
       <Route path='/News' element={<News/>}/>
        <Route path='/settings' element={<Settings/>}/>
        </Routes>
       </div>
    </div>
  )
}



export default App;
