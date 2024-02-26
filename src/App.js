import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import FindUserInfo from './pages/FindUserInfo.js'
import Main from './pages/Main.js'
import NotFound from './pages/Notfound.js'
import Items from './pages/Items'
import TitleBar from './components/titlebar.js'
import SideBar from './components/sidebar.js'

function App() {
  return (
    <div>
      <BrowserRouter basename='/kahee-mall'>
        <TitleBar></TitleBar>
        <div className='flex-area'>
          <SideBar></SideBar>
          <div className='main-area'>
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/findUserInfo' element={<FindUserInfo />}></Route>
              <Route path='/items' element={<Items />}></Route>
              <Route path='/*' element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
