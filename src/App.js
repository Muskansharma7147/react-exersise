import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Link_SignUp from './pages/signup/signup';
import Link_Login from './pages/login/linkdin';
import formDemo from './mui/muiprac';
import muiComponent from './mui/muiprac2';
import Lkdn_Post from './components/post/lkdn_post';

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Routes>
          <Route Component={Link_SignUp} path='/signup' />
          <Route Component={Link_Login} path='/linkdin' />
          <Route Component={formDemo} path='/combo' />
          <Route Component={muiComponent} path='/compo'/>
          <Route Component={Lkdn_Post} path='/post'/>

        </Routes>

      </CssBaseline>
      {/*<Login/>*/}
      {/* <Link_SignUp/> */}
      {/* <Linklogin/> */}

    </div>
  );
}

export default App;
