import React from 'react'
import styles from "../CardInfo/CardInfo.module.scss"
import Button from '../Button/Button'
import Timer from '../Timer/Timer'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import Loader from "../Loader/Loader"
import { GlobalState } from "../../GloabalState"



const CardInfo = () => {
    const { _id } = useParams()
    const state = React.useContext(GlobalState)

    const [cart, setCart] = state.cart

    const [products] = state.products

    const [isLoading, setIsLoading] = React.useState(true)
    const [info, setInfo] = React.useState({
        description: '',
        imageUrl: [],
        name: '',
        price: '',
        productColors: [],
        size: [],
        warranty: ''
    })
    const [tab, setTab] = React.useState(0)
    // const [btnText, setBtnText] = React.useState('Add to cart')

    React.useEffect(() => {
        const getCardInfo = async () => {
            const { data } = await axios.get(`http://localhost:9000/store/${_id}`)
            const [{ description, imageUrl, name, price, productColors, size, warranty }] = data
            setInfo({
                description: description,
                imageUrl: imageUrl,
                name: name,
                price: price,
                productColors: productColors,
                size: size,
                warranty: warranty
            })
            setIsLoading(false)
        }
        getCardInfo()
    }, [])

    // React.useEffect(() => {
    //     setCart(JSON.parse(localStorage.getItem('cart')))
    // }, [])

    const addProduct = () => {
        const productExist = cart.find(item => item._id === _id)
        if (productExist) {
            const result = cart.map(item => item._id === _id ? { ...productExist, quantity: productExist.quantity + 1 } : item)
            localStorage.setItem('cart', JSON.stringify(result))
            setCart(JSON.parse(localStorage.getItem('cart')))
            console.log('tyt');
        } else {
            const currentProduct = products.find(item => {
                if(item._id === _id) {
                    return item
                }
            })
            const result = [...cart, { ...currentProduct, quantity: 1 }]
            localStorage.setItem('cart', JSON.stringify(result))
            setCart(JSON.parse(localStorage.getItem('cart')))
            console.log('tyt');
        }

        // setBtnText("product in cart")

    }


    const navigate = useNavigate()
    const goBack = () => {
        navigate("/store", { replace: true })
    }

    return (

  
        <div className={styles.cardInfo}>

            <button className={styles.goBack} onClick={goBack}> &#10094; Back</button>


            {isLoading ? <Loader /> : 
            <div className={styles.cardInfoWrapper}>
                <div className={styles.cardInfoInner}>
                    <div className={styles.cardInfoSlider}>

                    
                        <div className={styles.slider}>
                            <div className={styles.sliderWrapper}>
                                <img className={styles.sliderImg} src={info.imageUrl[tab]} alt="imageUrl" />
                            </div>

                            <div className={styles.sliderBottom}>

                                {
                                    info.imageUrl.map((slide, index) => (
                                        <div key={index} className={styles.sliderBottomWrapper}>
                                            <img
                                                className={styles.sliderBottomImg}
                                                src={slide} alt="slide_images"
                                                onClick={ () => setTab(index) }
                                            />
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardInfoAbout}>
                        <div className={styles.cardInfoName}>
                            <h3>{info.name}</h3>
                        </div>

                        <div className={styles.cardInfoElements}>
                            <div className={styles.cardInfoLeft}>
                                <div className={styles.cardInfoSize}>
                                    {info.size.map((el, index) => (
                                        <p key={index}>{el}</p>
                                    ))}
                                </div>

                                <div className={styles.cardInfoPrice}>
                                    <p> $ {info.price}</p>
                                </div>
                                <Button onClick={addProduct} text={"Add to cart"} />
                            </div>

                            <div className={styles.cardInfoRight}>
                                <Timer />
                                <img className={styles.cardInfoRightImg} src={info.warranty} alt="" />
                            </div>
                        </div>

                        <div className={styles.cardInfoRange}>
                            <h6><span>Series 7</span> colors</h6>
                            <div className={styles.cardInfoColors}>
                                {info.productColors.map((color, index) => (
                                    <img key={index} src={color} alt="" />
                                ))}
                            </div>
                        </div>

                        <div className={styles.cardInfoText}>
                            {info.description}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default CardInfo