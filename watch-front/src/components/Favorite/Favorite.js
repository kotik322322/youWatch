import React, { useState, useEffect } from 'react';
import styles from '../Favorite/Favorite.module.scss';
import Button from '../Button/Button';
import { GlobalState } from '../../GloabalState'

import favoriteImage from "../../assets/watch.png";
import favoriteImg from '../../assets/favorite/favoriteSolid.svg';



const Favorite = ({ name, price, imageUrl }) => {

  const state = React.useContext(GlobalState)
  const [favorite, setFavorite] = state.favorite
    console.log(favorite);



  return (

    <div className={styles.favorite}>

      <h2 className={styles.favoriteTitle}> Favorite </h2>

      <div className={styles.favoriteWrapper}>

        {
          favorite.length === 0
            ? <h4 className={styles.favoriteStatus}> Your favorite is empty </h4>
            : favorite.map(product => (
              <div className={styles.favoriteInner}>
                <img className={styles.favoriteImage} src={product.imageUrl[0]} alt="favorite_image" />
                <p className={styles.favoriteName}>{product.name.length > 70 ?
            `${product.name.substring(0, 70)}...` : product.name
          }</p>
                <p className={styles.favoritePrice}>$ {product.price}</p>
                <div className={styles.favoriteFooter}>
                  <img className={styles.favoriteIcon} src={favoriteImg} alt="favorite_icon_heart" />
                  <Button
                    text={'Add to cart'}
                  />
                </div>

              </div>
            ))
        }

      </div>
    </div>



  )
}



export default Favorite;