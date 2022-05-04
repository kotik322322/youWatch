import React, {useContext} from 'react';
import styles from '../Cart/Cart.module.scss';
import Button from '../Button/Button';

import imgWatch from "../../assets/watch.png";
import imgTrash from "../../assets/cart/icons_trash.svg";
import {GlobalState} from "../../GloabalState"


const Cart = () => {
    const state = useContext(GlobalState)
    const [cart] = state.cart
        console.log(cart);
    
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

                    {cart.map(product => (
                        <div className={styles.cartInfo}>

                        <img className={styles.cartInfoPic} src={product.imageUrl[0]} alt="product photo" />

                        <div className={styles.cartInfoText}>
                            <p className={styles.cartInfoName}>{product.name}</p>
                            <p className={styles.cartInfoOption}> <span>Color: </span> {product.filter.Color}</p>
                            <p className={styles.cartInfoOption}> <span>Size:</span> {product.filter.Size} mm</p>
                        </div>

                        <img className={styles.cartInfoTrash} src={imgTrash} alt="img_trash" />

                        <p className={styles.cartInfoPrice}> {product.price}</p>

                    </div>
                    ))}


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