import React, { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';




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
    <BrowserRouter>
      <div className='App'>
        <Header
          icons={icons}
        />
        <MainPage
          slides={slides}
          filters={filters}
        />

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
//     },
//     "slides" : [
//       "https://res.cloudinary.com/drw1dnak7/image/upload/v1651142311/ImgDataBase/slider/1_fo88mr.jpg",
//       "https://res.cloudinary.com/drw1dnak7/image/upload/v1651142311/ImgDataBase/slider/2_ynbxxh.jpg",
//       "https://res.cloudinary.com/drw1dnak7/image/upload/v1651142311/ImgDataBase/slider/3_geepko.png",
//       "https://res.cloudinary.com/drw1dnak7/image/upload/v1651142310/ImgDataBase/slider/4_u3nq9v.jpg",
//       "https://res.cloudinary.com/drw1dnak7/image/upload/v1651142311/ImgDataBase/slider/5_ixu8gl.png",
//       "https://res.cloudinary.com/drw1dnak7/image/upload/v1651142310/ImgDataBase/slider/6_of71ep.jpg",
//       "https://res.cloudinary.com/drw1dnak7/image/upload/v1651142310/ImgDataBase/slider/7_hvqjcg.jpg",
//       "https://res.cloudinary.com/drw1dnak7/image/upload/v1651142310/ImgDataBase/slider/8_if8vdu.jpg",
//       "https://res.cloudinary.com/drw1dnak7/image/upload/v1651142311/ImgDataBase/slider/9_shiroc.jpg",
//       "https://res.cloudinary.com/drw1dnak7/image/upload/v1651142311/ImgDataBase/slider/10_m7wkek.jpg",
//       "https://res.cloudinary.com/drw1dnak7/image/upload/v1651142311/ImgDataBase/slider/11_lssvj2.png"
//     ]

//   }
// ]