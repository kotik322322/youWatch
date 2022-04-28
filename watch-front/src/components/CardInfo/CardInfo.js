import React from 'react'
import styles from "../CardInfo/CardInfo.module.scss"
import Button from '../Button/Button'
import Timer from '../Timer/Timer'
import { useSelector } from 'react-redux'



const CardInfo = () => {

    const [tab, setTab] = React.useState(0)
    const { items: { infoToCard } } = useSelector((state) => state)

    const { description, imageUrl, name, price, productColors, size, warranty } = infoToCard

    return (

        <div className={styles.cardInfo}>
            <div className={styles.cardInfoWrapper}>
                <div className={styles.cardInfoInner}>

                    <div className={styles.cardInfoSlider}>
                        <div className={styles.slider}>
                            <div className={styles.sliderWrapper}>
                                <img className={styles.sliderImg} src={imageUrl[tab]} alt="" />
                            </div>

                            <div className={styles.sliderBottom}>

                                {
                                    imageUrl.map((slide, index) => (
                                        <div key={index} className={styles.sliderBottomWrapper}>
                                            <img
                                                className={styles.sliderBottomImg}
                                                src={slide} alt=""
                                                onClick={() => setTab(index)}
                                            />
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardInfoAbout}>
                        <div className={styles.cardInfoName}>
                            <h3>{name}</h3>
                        </div>

                        <div className={styles.cardInfoElements}>
                            <div className={styles.cardInfoLeft}>
                                <div className={styles.cardInfoSize}>
                                    {size.map(el => <p>{el}</p>)}
                                </div>


                                <div className={styles.cardInfoPrice}>
                                    <p>{price}</p>
                                </div>

                                <Button text={'Add to cart'} />
                            </div>

                            <div className={styles.cardInfoRight}>
                                <Timer />

                                <img className={styles.cardInfoRightImg} src={warranty} alt="" />
                            </div>
                        </div>

                        <div className={styles.cardInfoRange}>
                            <h6><span>Series 7</span> colors</h6>
                            <div className={styles.cardInfoColors}>
                                {productColors.map(color => (
                                    <img src={color} alt="" />
                                ))}
                            </div>
                        </div>

                        <div className={styles.cardInfoText}>
                            {description}


                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CardInfo