import React, { useState, useEffect } from 'react';
import styles from '../Favorite/Favorite.module.scss';
import Button from '../Button/Button';

import favoriteImage from "../../assets/watch.png";
import favorite from '../../assets/favorite/favoriteSolid.svg';
import axios from 'axios'


const Favorite = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get('http://localhost:9000/watch_7').then(res => console.log(res))
  }, [])

    return (


    <div className={styles.favorite}>
       
        <h2 className={styles.favoriteTitle}> Favorite </h2>
              {/* <h4 className={styles.cartStatus}> Your favorite is empty </h4> */}
            <div className={styles.favoriteWrapper}>
              <div className={styles.favoriteInner}>
                <img className={styles.favoriteImage} src={favoriteImage} alt="favorite_image" />
                  <p className={styles.favoriteName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
                    <p className={styles.favoritePrice}> $ 360 </p>
                    <div className={styles.favoriteFooter}>
                      <img className={styles.favoriteIcon} src={favorite} alt="favorite_icon_heart" />
                   <Button
                    text={'Add to cart'}        
                  />
                  </div>

               </div>

               <div className={styles.favoriteInner}>
                <img className={styles.favoriteImage} src={favoriteImage} alt="favorite_image" />
                  <p className={styles.favoriteName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
                    <p className={styles.favoritePrice}> $ 360 </p>
                    <div className={styles.favoriteFooter}>
                      <img className={styles.favoriteIcon} src={favorite} alt="favorite_icon_heart" />
                   <Button
                    text={'Add to cart'}        
                  />
                  </div>

               </div>

               <div className={styles.favoriteInner}>
                <img className={styles.favoriteImage} src={favoriteImage} alt="favorite_image" />
                  <p className={styles.favoriteName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
                    <p className={styles.favoritePrice}> $ 360 </p>
                    <div className={styles.favoriteFooter}>
                      <img className={styles.favoriteIcon} src={favorite} alt="favorite_icon_heart" />
                   <Button
                    text={'Add to cart'}        
                  />
                  </div>

               </div>

               <div className={styles.favoriteInner}>
                <img className={styles.favoriteImage} src={favoriteImage} alt="favorite_image" />
                  <p className={styles.favoriteName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
                    <p className={styles.favoritePrice}> $ 360 </p>
                    <div className={styles.favoriteFooter}>
                      <img className={styles.favoriteIcon} src={favorite} alt="favorite_icon_heart" />
                   <Button
                    text={'Add to cart'}        
                  />
                  </div>

               </div>

               <div className={styles.favoriteInner}>
                <img className={styles.favoriteImage} src={favoriteImage} alt="favorite_image" />
                  <p className={styles.favoriteName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
                    <p className={styles.favoritePrice}> $ 360 </p>
                    <div className={styles.favoriteFooter}>
                      <img className={styles.favoriteIcon} src={favorite} alt="favorite_icon_heart" />
                   <Button
                    text={'Add to cart'}        
                  />
                  </div>

               </div>

               <div className={styles.favoriteInner}>
                <img className={styles.favoriteImage} src={favoriteImage} alt="favorite_image" />
                  <p className={styles.favoriteName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
                    <p className={styles.favoritePrice}> $ 360 </p>
                    <div className={styles.favoriteFooter}>
                      <img className={styles.favoriteIcon} src={favorite} alt="favorite_icon_heart" />
                   <Button
                    text={'Add to cart'}        
                  />
                  </div>

               </div>

               <div className={styles.favoriteInner}>
                <img className={styles.favoriteImage} src={favoriteImage} alt="favorite_image" />
                  <p className={styles.favoriteName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
                    <p className={styles.favoritePrice}> $ 360 </p>
                    <div className={styles.favoriteFooter}>
                      <img className={styles.favoriteIcon} src={favorite} alt="favorite_icon_heart" />
                   <Button
                    text={'Add to cart'}        
                  />
                  </div>

               </div>

               <div className={styles.favoriteInner}>
                <img className={styles.favoriteImage} src={favoriteImage} alt="favorite_image" />
                  <p className={styles.favoriteName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
                    <p className={styles.favoritePrice}> $ 360 </p>
                    <div className={styles.favoriteFooter}>
                      <img className={styles.favoriteIcon} src={favorite} alt="favorite_icon_heart" />
                   <Button
                    text={'Add to cart'}        
                  />
                  </div>

               </div>






            </div>
    </div>   



 )
}



export default Favorite;