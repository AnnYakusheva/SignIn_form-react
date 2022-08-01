import { useSelector } from 'react-redux';
import { LoginPage } from './components/LoginPage/LoginPage';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import { ProfilePage } from './components/ProfilePage/ProfilePage';
import React from 'react';


function App() {
  const state = useSelector(state => state.auth)

  return (
    <div className="App">
        <Routes>
            <Route index element={
              <>
                <h1>Sign in</h1>
                <LoginPage />
              </>} 
            />
            <Route path='/profile' element={<ProfilePage login={state.login}/>} /> 
        </Routes>
    </div>
  );
}

export default App;
