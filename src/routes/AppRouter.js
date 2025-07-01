import React, {useState} from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'


function AppRouter() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

    </Routes>
  </Router>
  );
}

export default AppRouter;
