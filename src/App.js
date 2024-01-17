import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login.js'
import Main from './pages/main.js'
import NotFound from './pages/notfound.js'
import TitleBar from './components/titlebar.js'
import SideBar from './components/sidebar.js'

function App() {
  return (
    <div>
      <div className='flex-area'>
        <SideBar></SideBar>
        <div className='main-area'>
          <TitleBar></TitleBar>
          <BrowserRouter>
            <Routes>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/main' element={<Main />}></Route>
              <Route path='/*' element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>

  );
}

export default App;
