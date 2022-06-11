import React, { useState, useEffect } from 'react';
import styles from '../Favorite/Favorite.module.scss';
import Button from '../../components/Button/Button';
import { GlobalState } from '../../GloabalState'

import { AiFillHeart } from 'react-icons/ai'



const Favorite = () => {

  const state = React.useContext(GlobalState)
  const [favorite, setFavorite] = state.favorite

  const [cart, setCart] = state.cart

  const removeFromFavorite = (product) => {
    const result = favorite.filter(item => item._id !== product._id)
    setFavorite(result)
    localStorage.setItem("favorite", JSON.stringify(result))
  }

  const addToCart = (product) => {
    const productExist = cart.find(item => item._id === product._id)
    if (productExist) {
      const result = cart.map(item => item._id === product._id ? { ...productExist, quantity: productExist.quantity + 1 } : item)
      localStorage.setItem('cart', JSON.stringify(result))
      setCart(JSON.parse(localStorage.getItem('cart')))
    } else {
      const result = [...cart, { ...product, quantity: 1 }]
      localStorage.setItem('cart', JSON.stringify(result))
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }



  return (

    <div className={styles.favorite}>

      <h2 className={styles.favoriteTitle}> Favorite </h2>

      <div className={styles.favoriteWrapper}>

        {
          favorite.length === 0
            ? <h4 className={styles.favoriteStatus}> Your favorite is empty </h4>
            : favorite.map(product => (
              <div key={product._id} className={styles.favoriteInner}>
                <img className={styles.favoriteImage} src={product.imageUrl[0]} alt="favorite_image" />
                <p className={styles.favoriteName}>{product.name.length > 70 ?
                  `${product.name.substring(0, 70)}...` : product.name
                }</p>
                <p className={styles.favoritePrice}>$ {product.price}</p>
                <div className={styles.favoriteFooter}>
                  <AiFillHeart
                    className={styles.favoriteIcon}
                    style={{ fontSize: '24px', cursor: 'pointer' }}
                    onClick={() => removeFromFavorite(product)}
                  />
                  <Button
                    onClick={() => addToCart(product)}
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