import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login.js'
import Main from './pages/Main.js'
import NotFound from './pages/Notfound.js'
import TitleBar from './components/titlebar.js'
import SideBar from './components/sidebar.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='flex-area'>
          <SideBar></SideBar>
          <div className='main-area'>
            <TitleBar></TitleBar>
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/*' element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
