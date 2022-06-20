import React from 'react';
import styles from './ContactUs.module.scss'

import { BsBuilding }  from "react-icons/bs";
import { BsCreditCard2Back }  from "react-icons/bs";
import { BsHeadphones }  from "react-icons/bs";
import { MdOutlineChangeCircle }  from "react-icons/md";
import { BsCardList }  from "react-icons/bs";



const ContactUs = () => {

    return (
        <div className={styles.contact}>
            <h2 className={styles.contactTitle}> Contact Us </h2>

            <div className={styles.contactWrapper}>
                <div className={styles.contactInner}>
                    <div className={styles.contactInfo}>


                        <div className={styles.contactBlock}>
                           <div className={styles.contactItem}>
                                <div className={styles.contactItemTitle}>
                                    <BsBuilding />
                                    <h4>  Company: </h4>
                                </div>
                                    <div className={styles.contactItemText}>
                                        <p> Watchware store "You Watch" Co.</p>
                                        <p> No. Court Registration System: 1000677866 </p>
                                        <p> VAT-ID: 567-27-85-107 </p>
                                    </div>
                            </div> 
                                

                            <div className={styles.contactItem}>
                                <div className={styles.contactItemTitle}>
                                    <BsCreditCard2Back />
                                    <h4 > Bank account number: </h4>
                                </div>
                                <div className={styles.contactItemText}>
                                    <p> FIO Bank a.s. </p>
                                    <p> IBAN: UA23 8380 0530 0785 4432 4440 </p>
                                    <p> BIC/SWIFT: FIOCEWRACX </p>
                                </div>
                            </div>

                        </div>

                        

                        <div className={styles.contactBlock}>
                            <div className={styles.contactItem}>
                                <div className={styles.contactItemTitle}>
                                    <BsHeadphones />
                                    <h4> Contact: </h4>
                                </div>  
                                    <div className={styles.contactItemText}>
                                        <p> Mon-Fri: 9:00 AM - 5:00 PM CET </p>
                                        <a href="tel:+380990220102"> <span> Tel </span> +38 (099) 022-01-02 </a>
                                        <a href="tel:+380632139898"> <span> Tel </span>  +38 (063) 213-98-98 </a>
                                        <a  href="mailto:info@you-watch.com"> <span> E-Mail: </span> info@you-watch.com </a>
                                        <p> 400 Aldridge Rd, Birmingham B44 8BH, UK </p>
                                    </div>
                            </div> 

                            <div className={styles.contactItem}>
                                <div className={styles.contactItemTitle}>
                                    <MdOutlineChangeCircle />
                                    <h4> Returns and Complaints: </h4>
                                </div>
                            
                                <div className={styles.contactItemText}>
                                    <p> Moor St, </p>
                                    <p> Birmingham B5 4BU, </p>
                                    <p> Office 302, </p>
                                    <p>United Kingdom</p>
                                </div>
                            </div>

                        </div>
                        
                        <div className={styles.contactFooterTitle}>
                            <BsCardList/>
                            <h4> For Our Customer: </h4>
                        </div>
                        
                        <div className={styles.contactFooterText}>
                            <p>1. To use the services provided by <span> YOU WATCH STORE </span> a Customer should have:</p>
                                
                                <p>- Web browser: Internet Explorer (version not older than 7.0), Mozilla Firefox (version not older than 3.0), Chrome (all available versions) or Opera (version not older that 2), Safari (version not older than 10).</p>
                                <p>- active Java Script</p>
                                <p>- e-mail address</p>

                            <p>2. Promotions and discounts cannot be combined.</p>
                            <p>3. In matters not regulated in these terms, consumer rights are regulated by EU law.</p>
                            <p>4. The European Commission provides a platform for online dispute resolution (OS) which you can find at http://ec.europa.eu/consumers/odr/. To participate We are not a dispute settlement procedure before a consumer arbitration board committed and not ready.</p>
                        </div>


                    </div>
                </div> 
            </div>
        </div>

    )

}


export default ContactUs;
