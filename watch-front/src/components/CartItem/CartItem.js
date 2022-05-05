import React from 'react'
import styles from "./CartItem.module.scss"
import imgTrash from "../../assets/cart/icons_trash.svg";


const CartItem = ({imageUrl, name, color, size, price, onClick, addProduct, removeProduct, quantity}) => {
    return (
        <div className={styles.cartInfo}>

            <img className={styles.cartInfoPic} src={imageUrl} alt="product photo" />

            <div className={styles.cartInfoText}>
                <p className={styles.cartInfoName}>{name}</p>
                <p className={styles.cartInfoOption}> <span>Color: </span> {color}</p>
                <p className={styles.cartInfoOption}> <span>Size:</span> {size} mm</p>
            </div>

            <img 
            className={styles.cartInfoTrash} 
            src={imgTrash} 
            alt="img_trash" 
            onClick={onClick}
            />
            <div className={styles.cartInfoQuantity}>
                <button 
                className={styles.cartInfoBtn}
                onClick={addProduct}
                >+</button>
                <button 
                className={styles.cartInfoBtn}
                onClick={removeProduct}
                >-</button>
            </div>

            {/* Здесь поменять класс */}
            <p className={styles.cartInfoPrice}> {quantity}</p>  
            <p className={styles.cartInfoPrice}> {quantity * price}</p>

        </div>
    )
}

export default CartItem