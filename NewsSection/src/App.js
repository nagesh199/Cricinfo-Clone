import logo from './logo.svg';
import './App.css';
import Main from './News/Main';
import {
 
  Routes,
  Route,
} from "react-router-dom";
import Individualdata from './News/Individualdata';
function App() {


  return (
    <div className="App">
      {/* <Main/> */}
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/:id" element={<Individualdata/>}/>

        
      </Routes>

    </div>
  );
}

export default App;
