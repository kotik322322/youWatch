import React, { useContext } from 'react';
import styles from '../Cart/Cart.module.scss';
import Button from '../Button/Button';
import { GlobalState } from "../../GloabalState"
import CartItem from '../CartItem/CartItem';


const Cart = () => {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.cart

    React.useEffect(() => {
        const result = localStorage.getItem('cart')
        result ? setCart(JSON.parse(result)) : setCart([])
    }, [])


    const deleteProductFromCart = (id) => {
        const deletedProduct = cart.filter(item => item._id !== id)
        const newStorage = localStorage.setItem('cart', JSON.stringify(deletedProduct))
        setCart(JSON.parse(localStorage.getItem('cart')))
    }

    const productPlus = (id) => {
        const currentProduct = cart.find(item => item._id === id)
        const result = cart.map(item => item._id === id ? { ...currentProduct, quantity: currentProduct.quantity + 1 } : item)
        localStorage.setItem('cart', JSON.stringify(result))
        setCart(JSON.parse(localStorage.getItem('cart')))
    }

    const productMinus = (id) => {
        const currentProduct = cart.find(item => item._id === id)
        if (currentProduct.quantity === 1) {
            const deletedProduct = cart.filter(item => item._id !== id)
            localStorage.setItem('cart', JSON.stringify(deletedProduct))
            setCart(JSON.parse(localStorage.getItem('cart')))
        } else {
            const result = cart.map(item => item._id === id ? { ...currentProduct, quantity: currentProduct.quantity - 1 } : item)
            localStorage.setItem('cart', JSON.stringify(result))
            setCart(JSON.parse(localStorage.getItem('cart')))
        }
    }

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

                    {
                        cart.length
                            ? cart.map(item =>
                                <CartItem
                                    key={item._id}
                                    imageUrl={item.imageUrl[0]}
                                    name={item.name}
                                    color={item.filter.Color}
                                    size={item.filter.Size}
                                    price={item.price}
                                    quantity={item.quantity}
                                    onClick={() => deleteProductFromCart(item._id)}
                                    addProduct={() => productPlus(item._id)}
                                    removeProduct={() => productMinus(item._id)}
                                />)
                            : <h4 className={styles.cartStatus}> Your cart is empty </h4>
                    }




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