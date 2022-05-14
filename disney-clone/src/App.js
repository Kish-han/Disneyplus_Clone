import React, { useEffect } from 'react';
import './App.css';
import Loginpg from './pages/Loginpg';
import Homepg from './pages/Homepg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectuser } from './features/counter/userSlice';

function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
        console.log(userAuth)
      } else {
        //logged out
        dispatch(logout())
      }
    });
    return unsubscribe;
  }, [])
  

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Loginpg />
        ) : (
          <Routes>
            <Route exact path='/' element={<Homepg />} />
          </Routes>
        )}
      </BrowserRouter>

    </div>
  );
}

export default App;
