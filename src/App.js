import './App.css';
import Header from './component/Header';
import EmptyPage from './component/EmptyPage';
import DayList from './component/DayList';
import Day from './component/Day';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';


function App() {
  return ( 
    <BrowserRouter>
      <div className="AppBody">

        <div className="App">
          <Header/>
          <Routes>
            <Route path="*" element={<EmptyPage/>}></Route>
            <Route exact path="/" element={<DayList />}/>
            <Route path="/create_word" element={<CreateWord />}/>
            <Route path="/create_day" element={<CreateDay />}/>
            <Route path="/day/:day" element={<Day />}/>
          </Routes>
        </div>
        
        <div>
          <img className="aImg" alt="a" src="img/a.png" />
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
