import React from 'react';
import styles from '../Main/Main.module.scss';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/scss/pagination';
import logoSE from '../../assets/main/apple-watch-series-SE.png'
import picSE from '../../assets/main/appleWatchSE1.png'
import logoSiries6 from '../../assets/main/apple-watch-series-6.png'
import picSiries6 from '../../assets/main/apple_watch_siries_6.png'
import logoSiries7 from '../../assets/main/apple-watch-series-7.png'
import picSiries7 from '../../assets/main/apple_watch_siries_7.png'
// import next from '../../assets/next-arrow.svg'
// import prev from '../../assets/prev-arrow.svg'
import {FaArrowLeft} from "react-icons/fa"
import {FaArrowRight} from "react-icons/fa"




import axios from "axios"


const Main = () => {
  const [slides, setSlides] = React.useState([])
  React.useEffect(() => {
    
    const response = async () => {
      const { data } = await axios.get('http://localhost:9000/slides')
      const slideCollection = data.map((item => item.slides))
      setSlides(slideCollection)
    }

    response()
  }, [])


  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        <div className={styles.slider}>
          
          <Swiper
            style={{ paddingBottom: '30px' }}
            tag='section'
            wrapperTag='ul'
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            effect={"slide"}
            spaceBetween={0}
            autoplay={{ delay: 1500 }}
            loop={true}
            pagination={{
              clickable: true,
              // el: ".sliderPagination",
              // type: 'custom',
              // bulletClass: 'sliderPaginationDot',
            }}
            loopedSlides={8}
            speed={1000}
            slidesPerView={1}
            // onSlideChange={() => console.log('privet')}
            // onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              nextEl: ".slider-button-next",
              prevEl: ".slider-button-prev",
            }}

          >

            {
              slides.map((slide, index) => (
                <SwiperSlide tag='li' style={{ listStyle: 'none' }} key={index}>
                  <img src={slide} alt="" />
                </SwiperSlide>
              ))
            }

            <div className={styles.navButton}>
              <button className="slider-button-prev">
                <FaArrowLeft  style={{ fontSize: "30px", color: "#9f9f9f" }}/>
              </button>
              <button className="slider-button-next">
                <FaArrowRight style={{ fontSize: "30px", color: "#9f9f9f" }}/>
              </button>
            </div>

          </Swiper>
        </div>



        <section className={styles.watchInfo}>

          <div className={styles.watchInfoInner}> 

              <div className={styles.watchInfoWrapper}>

                <div className={styles.watchInfoDescription}>

                    <div className={styles.watchInfoLogo}>
                      <img src={logoSE} alt="apple_watch_se" />
                    </div>

                       <div className={styles.watchInfoSize}>
                         <p> 40 mm </p>
                          <p> 44 mm </p>
                       </div>

                         <p className={styles.watchInfoText}>
                           Measure your blood oxygen level with a revolutionary sensor and app. Take an ECG anytime, anywhere. See your fitness metrics at a glance with the enhanced Always-On Retina display. With <span> Apple Watch Series 6 </span> on your wrist, a healthier, more active, more connected life is within reach.
                         </p>
                </div>

                        <div className={styles.watchInfoImg}>
                          <img src={picSE} alt="se" />
                        </div>
              </div>



              <div className={styles.watchInfoWrapper}>

                <div className={styles.watchInfoDescription}>

                    <div className={styles.watchInfoLogo}>
                      <img src={logoSiries6} alt="apple_watch_siries_6" />
                    </div>

                       <div className={styles.watchInfoSize}>
                         <p> 40 mm </p>
                          <p> 44 mm </p>
                       </div>

                         <p className={styles.watchInfoText}>
                           Measure your blood oxygen level with a revolutionary sensor and app. Take an ECG anytime, anywhere. See your fitness metrics at a glance with the enhanced Always-On Retina display. With <span> Apple Watch Series 6 </span> on your wrist, a healthier, more active, more connected life is within reach.
                         </p>
                </div>

                        <div className={styles.watchInfoImg}>
                          <img src={picSiries6} alt="picSiries6" />
                        </div>
              </div>

              <div className={styles.watchInfoWrapper}>

                <div className={styles.watchInfoDescription}>

                    <div className={styles.watchInfoLogo}>
                      <img src={logoSiries7} alt="apple_watch_siries_7" />
                    </div>

                       <div className={styles.watchInfoSize}>
                         <p> 41 mm </p>
                          <p> 45 mm </p>
                       </div>

                         <p className={styles.watchInfoText}>
                         The larger display enhances the entire experience, making Apple Watch easier to use and read. Series 7 represents our biggest and brightest thinking. You don’t need to raise your wrist or touch the screen to see the time or other information and complications on your watch face, because the display is always on. And it’s 70% brighter indoors when your wrist is down.
                         </p>
                </div>

                        <div className={styles.watchInfoImg}>
                          <img src={picSiries7} alt="picSiries7" />
                        </div>
              </div>


          </div>

        </section>

      </div>
    </div>
  )
}

export default Main;