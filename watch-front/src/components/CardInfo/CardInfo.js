import React from 'react'
import styles from "../CardInfo/CardInfo.module.scss"
import Button from '../Button/Button'
import Timer from '../Timer/Timer'



import card from '../../assets/card/card.jpg'
import card1 from '../../assets/card/card1.jpg'
import card2 from '../../assets/card/card2.jpg'
import card3 from '../../assets/card/card3.jpg'
import cardColor from '../../assets/card/cardColor.jpg'
import warranty from '../../assets/card/garanty.png'
import CardSlider from '../CardSlider/CardSlider'




const CardInfo = () => {
    return (

        <div className={styles.cardInfo}>
            <div className={styles.cardInfoWrapper}>
                <div className={styles.cardInfoInner}>

                    <CardSlider/>

                    <div className={styles.cardInfoAbout}>
                        <div className={styles.cardInfoName}>
                            <h3>Apple Watch Series 7 41mm Green Aluminum Case With Green Sport Band (MKN03)</h3>
                        </div>

                        <div className={styles.cardInfoElements}>
                            <div className={styles.cardInfoLeft}>
                                <div className={styles.cardInfoSize}>
                                    <p>41 mm</p>
                                    <p>45 mm</p>
                                </div>


                                <div className={styles.cardInfoPrice}>
                                    <p>450 $</p>
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
                                <img src={cardColor} alt="" />
                                <img src={cardColor} alt="" />
                                <img src={cardColor} alt="" />
                                <img src={cardColor} alt="" />
                                <img src={cardColor} alt="" />
                            </div>
                        </div>

                        <div className={styles.cardInfoText}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo perspiciatis accusamus in fuga. Et vitae eum ipsam deserunt officiis rem iure, culpa temporibus inventore. Quibusdam magni sunt quas beatae quis? deserunt officiis rem iure, culpa temporibus inventore. Quibusdam magni sunt quas beatae quis?


                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CardInfo