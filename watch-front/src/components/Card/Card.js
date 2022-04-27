import React, { useState } from 'react';
import styles from '../Card/Card.module.scss';
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Thumbs, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import itemImg from '../../assets/card/card.jpg'
import favorite from '../../assets/card/favorite.svg'
import Button from '../Button/Button';



const Card = ({ imageUrl, name, price, id }) => {


  return (
    <div key={id} className={styles.card}>

      <img className={styles.cardFavorite} src={favorite} alt="favorite" />

      <div className={styles.cardImg}>
        <img src={imageUrl} alt="itemImg" />
      </div>

      <h3 className={styles.cardTitle}>

        {name.length > 80 ?
          `${name.substring(0, 80)}...` : name
        }

      </h3>
      <p className={styles.cardPrice}>
        {price}
      </p>

      <Button
        text={'Add to cart'}
      />


    </div>
  )
}

export default Card