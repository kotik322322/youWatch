import React from 'react';
import styles from '../Cart/Cart.module.scss';
import Button from '../Button/Button';

import imgWatch from "../../assets/watch.png";
import imgTrash from "../../assets/cart/icons_trash.svg";



const Cart = () => {

 return (
     
    <div className={styles.cart}>
      <div className={styles.cartWrapper}>
        
            <h2 className={styles.cartTitle}> Cart </h2>
              {/* <h4 className={styles.cartStatus}> Your cart is empty </h4> */}
             
             <div className={styles.cartInner}>
                 <div className={styles.cartInnerText}>
                    <p>Item</p>
                    <p>Price</p>
                 </div>

                    <div className={styles.cartInfo}>

                        <img className={styles.cartInfoPic} src={imgWatch} alt="img_watch" />

                        <div className={styles.cartInfoText}>
                            <p className={styles.cartInfoName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
                            <p className={styles.cartInfoOption}> <span>Color:</span> Gold</p>
                            <p className={styles.cartInfoOption}> <span>Size:</span> 40 mm</p>
                        </div>

                        <img className={styles.cartInfoTrash} src={imgTrash} alt="img_trash" />

                        <p className={styles.cartInfoPrice}> $ 360 </p>

                    </div>

                    <div className={styles.cartInfo}>

                        <img className={styles.cartInfoPic} src={imgWatch} alt="img_watch" />

                        <div className={styles.cartInfoText}>
                            <p className={styles.cartInfoName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
                            <p className={styles.cartInfoOption}> <span>Color:</span> Gold</p>
                            <p className={styles.cartInfoOption}> <span>Size:</span> 40 mm</p>
                        </div>

                        <img className={styles.cartInfoTrash} src={imgTrash} alt="img_trash" />

                        <p className={styles.cartInfoPrice}> $ 360 </p>

                    </div>

                    <div className={styles.cartInfo}>

                        <img className={styles.cartInfoPic} src={imgWatch} alt="img_watch" />

                        <div className={styles.cartInfoText}>
                            <p className={styles.cartInfoName}> Apple Watch Series SE 40mm Gold with Starlight Sport Band (MKQ03) </p>
                            <p className={styles.cartInfoOption}> <span>Color:</span> Gold</p>
                            <p className={styles.cartInfoOption}> <span>Size:</span> 40 mm</p>
                        </div>

                        <img className={styles.cartInfoTrash} src={imgTrash} alt="img_trash" />

                        <p className={styles.cartInfoPrice}> $ 360 </p>

                    </div>

                    <div className={styles.cartFooter}>

                        <div className={styles.cartFooterTotal}>
                        <p> <span>Subtotal</span> </p>
                        <p> $ 1080 </p>
                        </div>
                        
                        <Button
                         text={'Checkout'}
                         
                        />

                    </div>

                    

             </div>

      </div>
    </div>


    

 )
} 


export default Cart;