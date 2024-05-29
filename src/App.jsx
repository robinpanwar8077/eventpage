import Mainpage from "./Com/Mainpage"
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import EventScrollpage from "./Com/EventScrollpage";
import CollectionScrollpage from "./Com/CollectionScrollpage";


function App() {


  return (
    <>
<BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/event' element={<EventScrollpage />} />
        <Route path='/collection' element={<CollectionScrollpage />} />
      </Routes>  
    </BrowserRouter>
    </>
  )
}

export default App
