import React, { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter} from 'react-router-dom';




function App() {


  return (


    <BrowserRouter>

      <div className='App'>
        <Header />

        <MainPage />

        <Footer />
      </div>


    </BrowserRouter>

  );
}

export default App;
