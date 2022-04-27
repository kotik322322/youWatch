import React, { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';




function App() {

  const [images, setImages] = React.useState({
    icons :{}
  })

  const {icons} = images

  
  React.useEffect(() => {
    const getImages = async () => {
      const { data } = await axios.get('http://localhost:9000/images')
      const [{images}] = data
      setImages({
        ...images,
        icons : images.icons
      })
    }
    getImages()
  }, [])


  return (


    <BrowserRouter>

      <div className='App'>
        <Header
          icons={icons}
        />

        <MainPage />

        <Footer
          icons={icons}
        />
      </div>


    </BrowserRouter>

  );
}

export default App;


// [
//   {
//     "icons": {
//       "_id": "62695ea23c20cb07214551d0",
//       "logo": "https://res.cloudinary.com/drw1dnak7/image/upload/v1651072237/icons/logo_fifsmu.svg",
//       "facebook": "https://res.cloudinary.com/drw1dnak7/image/upload/v1651072191/icons/facebook_pmkxcd.svg",
//       "visa": "https://res.cloudinary.com/drw1dnak7/image/upload/v1651072073/icons/visa_j5g1sr.svg",
//       "viber": "https://res.cloudinary.com/drw1dnak7/image/upload/v1651072073/icons/viber_qrbsdy.svg",
//       "twitter": "https://res.cloudinary.com/drw1dnak7/image/upload/v1651072071/icons/twitter_bwlqjy.svg",
//       "youtube": "https://res.cloudinary.com/drw1dnak7/image/upload/v1651072071/icons/youtube_g525ip.svg",
//       "telegram": "https://res.cloudinary.com/drw1dnak7/image/upload/v1651072071/icons/telegram_eulrkn.svg",
//       "mastercard": "https://res.cloudinary.com/drw1dnak7/image/upload/v1651072071/icons/mastercard_ltf7km.svg",
//       "paypal": "https://res.cloudinary.com/drw1dnak7/image/upload/v1651072071/icons/paypal_tj13c9.svg",
//       "instagram": "https://res.cloudinary.com/drw1dnak7/image/upload/v1651072071/icons/instagram_odd3ck.svg"
//     }

//   }
// ]