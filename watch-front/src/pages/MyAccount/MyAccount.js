import React from 'react';
import styles from './MyAccount.module.scss';
import { BsPersonLinesFill } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';
import logOut from '../../assets/account/logout.svg'





const MyAccount = () => {

    return (
        <div className={styles.account}>
            <h1 className={styles.accountTitle}> My Account </h1>

            <div className={styles.accountWrapper}>
             
                    
                    <div className={styles.accountLeft}>  
                        <div className={styles.accountItems}>
                            <p> My Account </p>
                            <p> My Orders </p>
                            <p> Contact Us </p>
                        </div>

                        <div className={styles.accountLogout}>
                        <img src={logOut} alt="logout" />
                        <p> Log Out </p>
                        </div>
                    </div>  

                
                    <div className={styles.accountRight}>

                        <div className={styles.accountRightItem}>

                            <div className={styles.accountRightTitle}>

                                <BsPersonLinesFill />
                                <h3>Personal Data</h3>

                            </div>

                            <div className={styles.accountRightInfo}>

                                <p><span>Name:</span> Vitalii Fedosenko</p>
                                <p><span>Email:</span> fedosenkovitaliy@gmail.com</p>
                                <p><span>tel:</span> +380 (63) 065-42-77</p>
                                <p><span>Country:</span> Ukraine</p>
                                <p><span>City:</span> Kyiv</p>

                            </div>
                        </div>



                        <div className={styles.accountRightItem}>
        
                            <div className={styles.accountRightTitle}>
                                <FaShippingFast/>
                                <h3> Shipping Methods </h3>
                            </div>

                            <div className={styles.accountRightShipping}>
                                <div className={styles.accountRightMethods}>
                                    <h4> Royal Mail Guaranteed by 9am </h4>
                                    <p><span>Max:</span> 2kg / Delivery Aim: Guaranteed by 9am next working day / From £22.95 </p>
                                </div>

                                <div className={styles.accountRightMethods}>
                                    <h4> Parcelforce Worldwide express24 </h4>
                                    <p><span>Max:</span> 30kg / Delivery Aim: Guaranteed by end of next working day / From £9.35 </p>  
                                </div>

                            </div>

                        </div>



                    </div>


                      

            </div>
        </div>


    )
}

export default MyAccount;