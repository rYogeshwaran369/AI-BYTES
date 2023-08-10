import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import { Router,Route,Switch, Routes,BrowserRouter } from 'react-router-dom';
import Academic_breackthroughs from './Pages/Academic_breackthroughs';
import Events from './Pages/Events';
import Faculty from './Pages/Faculty';
import Magazine from './Pages/Magazine';


function App() {
  return (
    <div>
      <Routes>
      <Route path='/academic' element={<Academic_breackthroughs/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/faculty' element={<Faculty/>}/>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/magazine' element={<Magazine/>}/>
      </Routes>
    </div>
  );
}

export default App;
