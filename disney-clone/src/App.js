import React from 'react';
import './App.css';
import Loginpg from './pages/Loginpg';
import Homepg from './pages/Homepg';
import SigninOptions from './components/SigninOptions';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // const user = false

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* {!user ? ( */}
            <Route path='/login' element={<Loginpg />} />
            <Route path='/signin' element={<SigninOptions/>} />
          {/* ): ( */}
            <Route path='/' element={<Homepg />} />              
          {/* )} */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
