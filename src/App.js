import React from 'react';
import './App.css';
import Link_Login from './components/linkdin';
import Link_SignUp from './components/signup';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route Component={Link_SignUp} path='/signup' />
        <Route Component={Link_Login } path='/linkdin' />
      </Routes>
      {/*<Login/>*/}
      {/* <Link_SignUp/> */}
      {/* <Linklogin/> */}

    </div>
  );
}

export default App;
