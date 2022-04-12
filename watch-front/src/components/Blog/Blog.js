import React from 'react';
import styles from '../Blog/Blog.module.scss';

import blogPic from '../../assets/blog/watch_7_vs_watch_6.jpg';
import blogImg from '../../assets/blog/watch_img.jpg';
import imgColor7 from '../../assets/blog/siries7colors.jpg';
import imgColor6 from '../../assets/blog/siries6colors.jpg'


const Blog = () => {

    return (
        <div className={styles.blog}>
            <h2 className={styles.blogTitle}> Blog </h2>

            <div className={styles.blogWrapper}>
                <div className={styles.blogInfo}>
                    <h3 className={styles.blogInfoTitle}> What is the difference between Apple Watch Series 7, Series 6 and SE? </h3>
                    <img src={blogPic} alt="siries7_vs_siries6" />
                        <p className={styles.blogInfoText}> Traditionally, in September, Apple updates the lineup of its smartwatches. In 2021, the <span>Apple Watch Series 7</span> was introduced, which received an enlarged screen. And the predecessor, the <span>Apple Watch Series 6</span>, has disappeared from sale on the official website. However, this model will still be easy to find through authorized resellers.</p>
                        <p> Externally, both models look almost identical. The dimensions of the case have changed slightly. Now it is 45 mm instead of 44 mm and 41 mm instead of 40 mm. But, what is visual, what is tactile, the difference in dimensions will be quite difficult to notice. </p>
                        <p> There are slight differences in size - <span>Apple Watch Series 7</span> was slightly larger than the other two models. The 2021 model is available in 45 x 38 x 10.7mm (45mm) and 38.8g, and 41 x 35 x 10.7mm (41mm) and 32g. Apple Watch SE and Apple Watch Series 6 measured 44 × 38 × 10.7 mm and 40 × 34 × 10.7 mm, and weighed a couple of grams less. </p>

                    <img src={blogImg} alt="siries7_img" />
                        <p> Comparing the screens of the three models, the ranking is obvious. The simplest display is on the Series SE. The <span>Apple Watch Series 6</span> model has the same screen size and technology, but with the Always-On function (always on display). And in the novelty of 2021, the <span>Apple Watch Series 7</span>, the screen has also grown a little due to the area and resolution. </p>
                        <p>The display is one of the main differences between the <span>Apple Watch Series 7</span> and the SE model. The budget version of the watch received a border around the display with a thickness of 3.0 mm, and in the Series 7 they are reduced to 1.7 mm. The display area of the novelty is almost 20 percent larger than that of the SE. </p>
                        <p> With a larger screen, <span>Apple Watch Series 7</span> shows more information. There are two additional larger fonts and a new keyboard that makes it easier to manage smart watches. <span>Watch Series 7</span> features two new watch faces designed specifically for the large display and thin borders.</p>

                    <img src={imgColor7} alt="imgColor7" />
                        <p> Another visual difference is the body color options. The <span>Apple Watch Series 7</span> comes in black, gold, blue, red, and dark green.</p>
                        <p> If we talk about durability, then the novelty will be more reliable. Their screen received protection from chips, bumps and scratches: the new crystals are stronger, and the glass itself is now 50% thicker than the Series SE. <span>Apple Watch Series 7</span> is IP6X dust-resistant, making it more durable for use on the beach or in the desert.</p> 
                        <p> The Series 7, like the SE, boasts a waterproof case that will allow you to swim with an accessory in the sea or pool. </p>
                        
                    <img src={imgColor6} alt="imgColor6" />   
                        <p> The <span>Apple Watch Series 6</span> is available in silver, space gray, gold, blue or red. </p>
                        <p> Along with the new flagship <span>Watch Series 6</span>, Apple this year for the first time released a more affordable version of its smartwatch - Watch SE.</p> 
                        <p> At a price one and a half times lower than the <span>Watch Series 6</span>, this model gives the user almost the same set of features, with the exception of blood oxygen measurement, ECG (which will appear in watchOS 7.1) and the always-on display. In addition, here is the previous generation SoC - according to Apple, it is 20% slower. </p>
                        <p> We decided to examine the gadget, evaluate its battery life, compare it with the <span>Watch Series 5</span> model, which is still available from some resellers, and see if the <span>Watch SE</span> is worth buying. </p>
                        <p> <span> Apple Watch Series SE </span> is available in three colors: silver, black, gold. </p>
                </div>

            </div>


        </div>
    )
}



export default Blog;