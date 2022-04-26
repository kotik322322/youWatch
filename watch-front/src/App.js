import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import axios from 'axios'
import './App.css'
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';
import Favorite from './components/Favorite/Favorite';
import ContactUs from './components/ContactUs/ContactUs';
import Blog from './components/Blog/Blog';
import CardInfo from './components/CardInfo/CardInfo';
import CardSlider from './components/CardSlider/CardSlider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorePage from './components/StorePage/StorePage';
import MyAccount from './components/MyAccount/MyAccount';




function App() {


  return (

  
      <BrowserRouter>


        <div className='App'>
          <Header />

          <div className='main'>
            <Routes>
              <Route path='/' element={<Main />} />

              <Route path='/cart' element={<Cart />} />
              <Route path='/favorite' element={<Favorite />} />

              <Route path='/contact_us' element={<ContactUs />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/store' element={<StorePage />} />
              <Route path='/login' element={<MyAccount />} />
              {/* <CardSlider /> */}



            </Routes>
            {/* <Card /> */}
            {/* <CardInfo /> */}
          </div>
          {/* <CardSlider /> */}


          <Footer />
        </div>


      </BrowserRouter>

  );
}

export default App;
