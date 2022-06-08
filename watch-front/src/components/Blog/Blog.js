import React from 'react';
import styles from '../Blog/Blog.module.scss';

import blogPic from '../../assets/blog/theme-first/watch_7_vs_watch_6.jpg';
import blogImg from '../../assets/blog/theme-first/watch_img.jpg';
import imgColor7 from '../../assets/blog/theme-first/siries7colors.jpg';
import imgColor6 from '../../assets/blog/theme-first/siries6colors.jpg';

import blogOS9 from '../../assets/blog/theme-second/watchOS9.jpg';
import blogWorkout from '../../assets/blog/theme-second/psp-hero-watch-workout.jpg';
import watchFaces from '../../assets/blog/theme-second/watchface.jpg';
import multiPart from '../../assets/blog/theme-second/multi-part.jpg';

import blogThree from '../../assets/blog/theme-third/hero_colors_red__b5akdu8yhok2_large.jpg';

import appleFitness from '../../assets/blog/theme-fourth/apple_fitness.jpg';
import appleFitnessPlus from '../../assets/blog/theme-fourth/apple-Fitness-Plus.jpg';
import appleFitPlus from '../../assets/blog/theme-fourth/apple-fitness-plus-2.png';

import blogFifth from '../../assets/blog/theme-fifth/heartbeat.png';
import heartHold from '../../assets/blog/theme-fifth/heart.jpg';
import watchHeart from '../../assets/blog/theme-fifth/watch-heart.jpg';


import imgFirstBlog from '../../assets/blog/Apple-Watch-Series-7-et-Series-6-se.jpg';
import imgSecondBlog from '../../assets/blog/watchOS_9.jpg';
import imgThirdBlog from '../../assets/blog/famely_setup.jpg';
import imgFourthBlog from '../../assets/blog/fitness_plus.jpg';
import imgFifthBlog from '../../assets/blog/health_life.jpg';




const Blog = () => {

    return (
        <div className={styles.blog}>
            <h2 className={styles.blogTitle}> Blog </h2>

            <div className={styles.blogWrapper}>
                <div className={styles.blogItem}>
                    <img className={styles.blogImg} src={imgFirstBlog} alt="imgFirstBlog" />
                        <div className={styles.blogRight}>
                            <h4 className={styles.blogHeadline}> Difference between Apple Watch Series </h4>
                            <p className={styles.blogText}> Big screen. Huge impact. The challenge was to create a bigger display while barely expanding the dimensions of the watch itself. To do so, the display was completely re‑engineered reducing the borders by 40%, allowing for more screen area than both Series 6 and Series 3.</p>
                            <a className={styles.blogLink} href='#'>Learn more ⋙ </a>
                        </div>
                    
                </div>

                <div className={styles.blogItem}>
                <img className={styles.blogImg} src={imgSecondBlog} alt="imgSecondBlog" />
                        <div className={styles.blogRight}>
                            <h4 className={styles.blogHeadline}> watchOS 9 what's new </h4>
                            <p className={styles.blogText}> The Workout app is packed with more features than ever. Track your meds in the new Medications app. Get more insights into your sleep and heart health. And enjoy more watch faces with more personalization. </p>
                            <a className={styles.blogLink} href='#'> Learn more ⋙ </a>
                        </div>
                </div>

                <div className={styles.blogItem}>
                <img className={styles.blogImg} src={imgThirdBlog} alt="imgThirdBlog" />
                        <div className={styles.blogRight}>
                            <h4 className={styles.blogHeadline}> Family Setup </h4>
                            <p className={styles.blogText}> Your family joined at the wrist. Now family members who don't have an iPhone can stay in touch with Apple Watch. Getting started with Apple Watch Family Setup. </p>
                            <a className={styles.blogLink} href='#'> Learn more ⋙ </a>
                        </div>
                </div>
                    
                <div className={styles.blogItem}>
                <img className={styles.blogImg} src={imgFourthBlog} alt="imgFourthBlog" />
                        <div className={styles.blogRight}>
                            <h4 className={styles.blogHeadline}> How to use Apple Fitness+ </h4>
                            <p className={styles.blogText}> Work out with some of the world's top trainers on your iPhone, iPad, and Apple TV. Apple Fitness+ lets you browse to find your next workout, customize your in-session workout metrics, and get moving. </p>
                            <a className={styles.blogLink} href='#'> Learn more ⋙ </a>
                        </div>
                </div>

                <div className={styles.blogItem}>
                <img className={styles.blogImg} src={imgFifthBlog} alt="imgFifthBlog" />
                        <div className={styles.blogRight}>
                            <h4 className={styles.blogHeadline}> How identify early warning signs for a healthy life. </h4>
                            <p className={styles.blogText}> Apple Watch has powerful apps that make it the ultimate device for a healthy life. Now with new notifications and the ECG app, it can provide you and your patients with important information concerning their heart health. </p>
                            <a className={styles.blogLink} href='#'> Learn more ⋙ </a>
                        </div>
                </div>

                {/* <div className={styles.blogInfo}>
                <h3 className={styles.blogInfoTitle}> What is the difference between Apple Watch Series 7, Series 6 and SE? </h3>
                    <img src={blogPic} alt="siries7_vs_siries6" />
                        <p> Traditionally, in September, Apple updates the lineup of its smartwatches. In 2021, the <span>Apple Watch Series 7</span> was introduced, which received an enlarged screen. And the predecessor, the <span>Apple Watch Series 6</span>, has disappeared from sale on the official website. However, this model will still be easy to find through authorized resellers.</p>
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

                </div> */}

                {/* <div className={styles.blogInfo}> 
                    
                    <div>
                        <h3 className={styles.blogInfoTitle}> Apple watchOS 9 delivers new ways to stay connected, active, and healthy </h3>
                        <img src={blogOS9} alt="blogOS9" />
                    </div>

                    <div>
                        <h4> Watch Faces for Everyone </h4>
                        <p> The Apple Watch experience starts with watch faces, which give users the opportunity to express personal style while connecting them to relevant information at a glance through complications. watchOS 9 introduces four new faces: Lunar, which depicts the relationship between the Gregorian calendar and lunar calendar, used in many cultures such as Chinese, Islamic, and Hebrew; Playtime, a dynamic piece of art that’s unique to Apple Watch and created in collaboration with artist Joi Fulton; Metropolitan, a classic, type-driven watch face where the style changes as the Digital Crown is rotated; and Astronomy, an original face that has been completely remastered and features a new star map and current cloud data. </p>
                        <p> watchOS 9 introduces enhanced and modernized complications on some of the most classic watch faces, such as Utility, Simple, and Activity Analog, along with background color editing for Modular, Modular Compact, and X-Large for additional personalization. The new Portraits face showcases the depth effect on more photos, including cats, dogs, and landscapes, while Chinese scripts have been added as options for California and Typograph watch faces. Focus now allows users to select an Apple Watch face to automatically appear when they start a specific Focus on iPhone, such as the Photos face during a Personal Focus, helping users stay in the moment. </p>
                        <img src={watchFaces} alt="watchFaces" />
                    </div>

                    <div>

                        <h4> Workout App Updates </h4>
                        <p>The Workout app, one of the most popular apps on Apple Watch, has been updated to provide richer metrics for measuring performance, as well as new training experiences to help users reach fitness goals. The familiar in-session display now uses the Digital Crown to rotate between easy-to-read Workout Views, so users can see important metrics for different training styles. Heart Rate Zones, which can be manually created or automatically calculated using personalized Health data, can be used to monitor the intensity of a workout. Interval training is an important part of any training plan, and in watchOS 9, the Workout app introduces Custom Workouts, which can be used to create a structured workout that can include work and rest intervals. New alerts, including pace, power, heart rate, and cadence, can be added to guide users throughout the workout.</p>
                        <p>For triathletes, the Workout app now supports a new Multisport workout type that automatically switches between any sequence of swimming, biking, and running workouts, using motion sensors to recognize movement patterns. When each workout is complete, a redesigned summary page in the Fitness app offers additional details with interactive charts for more precise analysis.</p>
                        <img src={blogWorkout} alt="blogWorkout" />
                    </div>

                    <div>
                        <h4> Get More Out of Apple Fitness+ Workouts </h4>
                        <p>Apple Fitness+ is the first fitness and wellness service built around Apple Watch, designed to be welcoming to all. It intelligently incorporates real-time workout metrics from Apple Watch right on the screen with iPhone, iPad, or Apple TV, motivating users of all levels from start to finish. With watchOS 9, Fitness+ workouts now display on-screen guidance in addition to trainer coaching to help users get the most out of workouts, including: Intensity for HIIT, Cycling, Rowing, and Treadmill; Strokes per Minute (SPM) for Rowing; Revolutions per Minute (RPM) for Cycling; and Incline for walkers and runners in Treadmill. </p>
                        <p>Fitness+ subscribers without Apple TV can now use AirPlay to stream workouts and meditations with on-screen metrics to compatible third-party TVs and devices, allowing them to train anywhere, anytime.</p>
                        <img src={multiPart} alt="multiPart" />
                        <p>The Sleep experience on Apple Watch already empowers users to create Wind Down and Bedtime schedules, as well as track their sleep to help them meet their goals. Sleep tracking in watchOS 9 provides even more insights with the introduction of sleep stages. Using signals from the accelerometer and heart rate sensor, Apple Watch can detect when users are in REM, Core, or Deep sleep. Users will see sleep stage data on Apple Watch in the Sleep app and can view more detailed information, like time asleep, alongside additional metrics, like heart rate and respiratory rate, in sleep comparison charts in the Health app on iPhone.</p>
                        <p>The machine learning models were trained and validated against the clinical gold standard, polysomnography, with one of the largest and most diverse populations ever studied for a wearable. As the science of sleep is still being explored, users will be able to aid in potential discoveries by contributing their sleep stage data in the Apple Heart and Movement Study through the Research app.</p>
                    </div>
  
                </div> */}


                {/* <div className={styles.blogInfo}>   
                    <div>
                        <h3 className={styles.blogInfoTitle}> Family Setup. Your family joined at the wrist. </h3>
                        <img src={imgThirdBlog} alt="imgThirdBlog" />
                        
                        <h4> One iPhone makes everyone's Apple Watch tick. </h4>
                        <p> With Family Setup, everyone in the family, like your kids and older adults, can have an Apple Watch. Even those who don’t have their own iPhone yet. It's all the connectivity, wellness, and safety features you love, for everyone you love. Fun and independence for them. Peace of mind for you. </p>
                        
                        <h4>Pairing is caring.</h4>
                        <p>Family Setup lets you pair watches for your children and older family members to your iPhone. Everyone gets their own phone number, and you can manage each watch using the Apple Watch app on your iPhone.</p>
                        
                        <h4>A great call for kids.</h4>
                        <p>With Family Setup, kids get to experience many of the capabilities of Apple Watch. They can stay in touch with the people you approve, by calling and texting. And have fun streaming music, downloading apps, and paying for stuff with Apple Cash Family. You can also schedule Schooltime to limit Apple Watch features when they need to focus. Even the Activity rings have been rethought to better reflect how they exercise — tracking Move minutes instead of active calories. And with location sharing, you’ll get alerts when kids get home or aren’t where they’re expected to be.</p>
                        <img src={blogThree} alt="blogThree" />
                        
                        <h4>A smart call for older adults.</h4>
                        <p>Apple Watch can open up a whole new world for older family members. They get the same connectivity benefits of Apple Watch, like calling, texting, and location sharing to stay close to the family. And if they need it, they can make the text larger or bolded.</p>
                        <p>Safety features. Apple Watch comes with important safety features like fall detection which can detect if your loved ones have taken a hard fall. If it senses they're immobile, Emergency SOS will connect them with emergency services — even if they haven't signed up for a cellular plan. They can also get help in an emergency — all over the world by simply pressing and holding the side button.</p>
                        <p>Health features. Apple Watch can alert family members if it detects unusually high or low heart rates, as well as measure their current heart rate. And all the Activity goals, including Stand hours and Exercise minutes, can be customized to a level that works for older family members.</p>
                        
                    </div>

                </div> */}

                    {/* <div className={styles.blogInfo}>
                        <div>
                            <h3 className={styles.blogInfoTitle}> The first fitness service powered by Apple Watch. </h3>
                            <img src={appleFitness} alt="appleFitness" />
                        </div>
                
                        <div>
                            <h4>About Apple Fitness+</h4>
                            <p>Apple Fitness+ is a subscription service that gives you access to trainer-guided workout videos on your compatible iPhone, iPad, or Apple TV. Apple Fitness+ supports 11 workout types, including: High Intensity Interval Training (HIIT), Yoga, Core, Pilates, Strength, Treadmill (Walk or Run), Cycling, Rowing, Dance, and Mindful Cooldown. Video and audio Meditations are also offered as part of the service. </p>
                            <p>Apple Fitness+ workouts are powered by your Apple Watch* — you must own an Apple Watch to access the Apple Fitness+ service. In-session, you can see your heart rate and Activity Rings onscreen. Workouts range from 5 to 45 minutes in length, and new content is added weekly.</p>
                            <p>Learn how to subscribe to Apple Fitness+. Before starting a workout, make sure any devices you're using with Fitness+ are updated to the latest version of iOS, iPadOS, or to the latest version of watchOS. </p>
                            <img src={appleFitPlus} alt="appleFitPlus" />
                        </div>
                
                        <div>
                            <h4>Find a workout</h4>
                            <p>If you've completed at least three Fitness+ workouts, your personalized recommendations will be at the top of the app. If you don't see personalized recommendations, you can still find and filter workouts.</p>
                            <p><span>1. </span>On your iPhone, open the Fitness app and tap the Fitness+ tab. On your iPad or Apple TV, open the Fitness app.</p>
                            <p><span>2. </span>Select a workout type.</p>
                            <p><span>3. </span>Tap or select the Filter button.</p>
                            <p><span>4. </span>Tap a filter option to narrow down the workouts.</p>
                
                            <h4>Once you've found a workout, you can:</h4>
                            
                                <p> - Tap or select Preview to watch a preview of the workout. In the preview, the trainer will give you an idea of the structure of the workout, the playlist, and the inspiration behind the workout.</p>
                                <p> - Save a workout by tapping the Add button on your iPhone or iPad, or selecting Save Workout on your Apple TV. To access your saved workouts, scroll to My Workouts at the bottom of Fitness+.</p>
                                <p> - Review the music playlist for the workout. If you have an Apple Music subscription, tap or select Listen in Music to add the playlist in Apple Music.</p>
                                <img src={appleFitnessPlus} alt="appleFitnessPlus" />
                        </div>
                
                        <div>
                            <h4>Customize workout metrics</h4>
                            <p>You can adjust which metrics appear onscreen before you start a workout, and can change them at any time during your workout.</p>
                            <p><span>1. </span>Tap Let's Go to start a workout. If you already have a workout in progress, tap or press pause to customize your metrics.</p>
                            <p><span>2. </span>On your iPhone or iPad, tap the Metrics Editor button . On your Apple TV, use your remote to click the Metrics Editor button .</p>
                
                        </div>


                    </div> */}

                    {/* <div className={styles.blogInfo}>
                        <div>
                            <h3 className={styles.blogInfoTitle}> Apple Watch. Helping your patients identify early warning signs. </h3>
                            <img src={blogFifth} alt="blogFifth" />
                        </div>

                        <h4>Heart rate notifications.</h4>
                        <p>Apple Watch checks for unusually high or low heart rates in the background, which could be signs of a serious underlying condition. This could help you and your patients identify situations which may warrant further evaluation.</p>

                        <h4>Irregular rhythm notifications.</h4>
                        <p>The irregular rhythm notification occasionally checks for signs of irregular rhythms that may be suggestive of atrial fibrillation (AFib). This feature won’t detect all instances of AFib but may catch something that can provide your patients with an early indication that further evaluation may be warranted.</p>
                        <p>Irregular rhythm notifications use the optical heart sensor to detect the pulse wave at the wrist and look for variability in beat‑to‑beat intervals when the user is at rest. If the algorithm repeatedly detects an irregular rhythm suggestive of AFib, your patient will receive a notification and the date, time, and beat-to-beat heart rate will be recorded in the Health app.</p>
                        <p>The irregular notification feature has been granted De Novo classification by the FDA for users 22 years and older in the U.S. with no prior history of AFib.</p>
                        <p>Validation of irregular rhythm notification feature.</p>
                        <img src={heartHold} alt="heartHold" />

                        <h4>ECG app.</h4>
                        <p>With the ECG app on Apple Watch Series 4 or later*, patients who experience symptoms such as rapid or skipped heartbeat, or receive the irregular rhythm notification, can capture an ECG and record their symptoms. This real world data can enable you to make more informed and timely decisions regarding further evaluation and care.</p>
                        <p>The ECG app uses the electrical heart sensor built into the Digital Crown and the back crystal of Apple Watch Series 4 or later* to record a single lead ECG similar to a Lead I ECG. The ECG app then provides a result of sinus rhythm, atrial fibrillation, atrial fibrillation with high heart rate, or poor recording, and prompts the user to enter any symptoms such as rapid or pounding heartbeat, dizziness, or fatigue. The waveform, results, date, time, and any symptoms are recorded and can be exported from the Health app as a PDF to share with a clinician. If the patient notes symptoms that indicate a serious condition, they are prompted to immediately call emergency services.</p>
                        <p>The updated ECG app with additional rhythm classification received 510(k) clearance from FDA for users 22 years or older.</p>
                        
                        <img src={watchHeart} alt="watchHeart" />

                        <p>In 2017 and 2018, researchers at Stanford University School of Medicine worked with Apple to conduct the Apple Heart Study on the detection of atrial fibrillation, a heartbeat irregularity that is a leading cause of stroke and hospitalization. Over 400,000 Apple Watch users participated and helped validate the ability of wearable technology to aid in the early detection of this condition, which often goes undiagnosed. And the study led to the availability of the irregular rhythm notification that is now on Apple Watch.</p>


                    </div> */}


            </div>


        </div>
    )
}



export default Blog;