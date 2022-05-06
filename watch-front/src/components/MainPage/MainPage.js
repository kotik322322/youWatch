import React from 'react'
import { Routes, Route } from 'react-router-dom';
////Components
import Main from '../Main/Main';
import Cart from '../Cart/Cart';
import Favorite from '../Favorite/Favorite';
import ContactUs from '../ContactUs/ContactUs';
import Blog from '../Blog/Blog';
import StorePage from '../StorePage/StorePage';
import MyAccount from '../MyAccount/MyAccount';
import CardInfo from '../CardInfo/CardInfo'


const MainPage = ({slides, filters}) => {

   
  return (
    <div>
         <Routes>
            <Route path='/' element={<Main slides= {slides} />} />

            <Route path='/cart' element={<Cart />} />

            <Route path='/favorite' element={<Favorite />} />

            <Route path='/contact_us' element={<ContactUs />} />

            <Route path='/blog' element={<Blog />} />
            
            <Route path='/store' element={<StorePage filters = {filters}/>} />

            <Route  path={`/store/:_id`} element={<CardInfo />}/>
            
            <Route path='/login' element={<MyAccount />} />


          </Routes>
    </div>
  )
}

export default MainPage


