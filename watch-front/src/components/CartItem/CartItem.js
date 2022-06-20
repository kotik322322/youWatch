import React from 'react'
import styles from "./CartItem.module.scss"
import { BsTrash } from "react-icons/bs"



const CartItem = ({ imageUrl, name, color, size, price, onClick, addProduct, removeProduct, quantity }) => {


    return (
        <div className={styles.cartInfo}>

            <img className={styles.cartInfoPic} src={imageUrl} alt="product photo" />

            <div className={styles.cartInfoText}>
                <p className={styles.cartInfoName}>{name}</p>
                <p className={styles.cartInfoOption}> <span>Color: </span> {color}</p>
                <p className={styles.cartInfoOption}> <span>Size:</span> {size} mm</p>
            </div>

            <BsTrash
                style={{ fontSize: "30px", cursor: "pointer" }}
                alt="img_trash"
                onClick={onClick}
            />
            <div className={styles.cartInfoQuantity}>
                <button
                    className={styles.cartInfoBtn}
                    onClick={removeProduct}
                >-</button>
                <p className={styles.cartInfoCount}> {quantity}</p>
                <button
                    className={styles.cartInfoBtn}
                    onClick={addProduct}
                >+</button>
            </div>


            <p className={styles.cartInfoPrice}>$ {quantity * price}</p>

        </div>
    )
}

export default CartItem