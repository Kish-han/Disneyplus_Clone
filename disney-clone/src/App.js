import React from 'react';
import './App.css';
import Loginpg from './pages/Loginpg';
import Homepg from './pages/Homepg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Loginpg />} />
          <Route path='/' element={<Homepg />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
