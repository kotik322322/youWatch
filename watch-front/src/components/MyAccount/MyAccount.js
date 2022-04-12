import React from 'react';
import styles from '../MyAccount/MyAccount.module.scss';

import logOut from '../../assets/account/logout.svg'





const MyAccount = () => {

    return (
        <div className={styles.account}>
            <h1 className={styles.accountTitle}> My Account </h1>

            <div className={styles.accountWrapper}>
                <div className={styles.accountInner}>
                    
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
                </div>        

            </div>
        </div>


    )
}

export default MyAccount;