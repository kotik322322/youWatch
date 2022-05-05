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

    const deleteProduct = (id) => {
        const filtered = cart.filter(item => item._id !== id)
        const newStorage = localStorage.setItem('cart', JSON.stringify(filtered))
        setCart(JSON.parse(localStorage.getItem('cart')))
    }

    const addProduct = (id) => {
        const currentQuantity = cart.find(item => item._id === id)
        currentQuantity.quantity += 1
        const result = cart.map(item => item._id === currentQuantity.id ? currentQuantity : item)  //Замена текущео элемента на новый с количеством
        const newStorage = localStorage.setItem('cart', JSON.stringify(result))
        setCart(JSON.parse(localStorage.getItem('cart')))
    }

    const removeProduct = (id) => {
        const currentQuantity = cart.find(item => item._id === id)
        currentQuantity.quantity -= 1
        const result = cart.map(item => item._id === currentQuantity.id ? currentQuantity : item)  //Замена текущео элемента на новый с количеством
        const newStorage = localStorage.setItem('cart', JSON.stringify(result))
        setCart(JSON.parse(localStorage.getItem('cart')))
        if(currentQuantity.quantity === 0) {
            const zeroQuantity = cart.filter(item => item._id !== id)
            const newStorage = localStorage.setItem('cart', JSON.stringify(zeroQuantity))
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
                                    quantity = {item.quantity}
                                    onClick={() => deleteProduct(item._id)}
                                    addProduct={() => addProduct(item._id)}
                                    removeProduct={() => removeProduct(item._id)}
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