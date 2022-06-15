import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Favorite from './pages/Favorite/Favorite';
import ContactUs from "./pages/ContactUs/ContactUs"
import Blog from './pages/Blog/Blog';
import StorePage from './pages/StorePage/StorePage';
import CardInfo from './pages/CardInfo/CardInfo';
import MyAccount from './pages/MyAccount/MyAccount';
import BlogInfo from './pages/BlogInfo/BlogInfo';




function App() {

  const [images, setImages] = React.useState({
    icons: {},
    slides: []
  })
  const [filters, setFilters] = React.useState({})

  const {
    icons,
    slides
  } = images

  React.useEffect(() => {
    const getStates = async () => {
      const { data: [{ icons, slides }] } = await axios.get('http://localhost:9000/images')
      setImages({
        icons: icons,
        slides: slides
      })
      const { data: [{ filters }] } = await axios.get('http://localhost:9000/filters')
      setFilters(filters)
    }


    getStates()

  }, [])


  return (
    <Router>
      <div className='App'>
        <Header
          icons={icons}
        />

        <Routes>
          <Route path='/' element={<Main slides={slides} />} />

          <Route path='/cart' element={<Cart />} />

          <Route path='/favorite' element={<Favorite />} />

          <Route path='/contact_us' element={<ContactUs />} />

          <Route path='/blog' element={<Blog />} />

          <Route path='/store' element={<StorePage filters={filters} />} />

          <Route path={`/store/:_id`} element={<CardInfo />} />

          <Route path='/login' element={<MyAccount />} />

          <Route path='/blog/:_id' element={<BlogInfo />} />


        </Routes>

        <Footer
          icons={icons}
        />
      </div>


    </Router>

  );
}

export default App;
