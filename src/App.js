import Header from "./Components/Common/Header";
import Home from "./Components/Home";
import Userlisting from "./Components/Userlisting";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="leftSide">
        <Header/>
      </div>
      <div className="rightSide">        
        <Routes>
            <Route path = "/" element={<Home/>} ></Route>
            <Route path = "/list_user" element={<Userlisting/>} ></Route>
        </Routes>       
      </div>
      
    </div>
  );
}

export default App;
