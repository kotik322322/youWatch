import React, { useState } from 'react';
import axios from 'axios'
import styles from './CardSlider.module.scss'



const CardSlider = () => {

    const [slides, setSlides] = useState([])
    const [tab, setTab] = useState(0)


    React.useEffect(() => {
        axios.get('https://623c657d7efb5abea680319a.mockapi.io/items/6').then(result => setSlides(result.data.imageUrl))
    }, [])

    return (

        <div className={styles.cardInfoSlider}>
            <div className={styles.slider}>
                <div className={styles.sliderWrapper}>
                <img className={styles.sliderImg} src={slides[tab]} alt="" />
                </div>

                <div className={styles.sliderBottom}>

                    {
                        slides.map((slide, index) => (
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



    )
}

export default CardSlider