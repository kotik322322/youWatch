import React from 'react';
import styles from '../ContactUs/ContactUs.module.scss'


const ContactUs = () => {

    return (
        <div className={styles.contact}>
            <h2 className={styles.contactTitle}> Contact Us </h2>

            <div className={styles.contactWrapper}>
                <div className={styles.contactInner}>
                    <div className={styles.contactInfo}>
                        <h4 className={styles.contactInfoTitle}> Company: </h4>
                        <div className={styles.contactInfoText}>
                            <p> Hardware store "You Watch" Co.</p>
                            <p> No. Court Registration System: 1000677866 </p>
                            <p> VAT-ID: 567-27-85-107 </p>
                        </div>

                        <h4 className={styles.contactInfoTitle}> Bank account number: </h4>
                        <div className={styles.contactInfoText}>
                            <p> FIO Bank a.s. </p>
                            <p> IBAN: UA23 8380 0530 0785 4432 4440 </p>
                            <p> BIC/SWIFT: FIOCEWRACX </p>
                        </div>

                        <h4 className={styles.contactInfoTitle}> Contact: </h4>
                        <div className={styles.contactInfoText}>
                            <p> Mon-Fri: 9:00 AM - 5:00 PM CET </p>
                            <a href="tel:+380990220102"> <span> Tel </span> +38 (099) 022-01-02 </a>
                            <a href="tel:+380632139898"> <span> Tel </span>  +38 (063) 213-98-98 </a>
                            <a  href="mailto:info@you-watch.com"> <span> E-Mail: </span> info@you-watch.com </a>
                            <p> 400 Aldridge Rd, Birmingham B44 8BH, UK </p>
                        </div>

                        <h4 className={styles.contactInfoTitle}> Returns and Complaints: </h4>
                        <div className={styles.contactInfoText}>
                            <p> Moor St, </p>
                            <p> Birmingham B5 4BU, </p>
                            <p> Office 302, </p>
                            <p>United Kingdom</p>
                        </div>
                        

                        <h4 className={styles.contactInfoTitle}> For Our Customer: </h4>
                        <div className={styles.contactInfoText}>
                            <p>1. To use the services provided by <span> YOU WATCH STORE </span> a Customer should have:</p>
                                
                                <p>- Web browser: Internet Explorer (version not older than 7.0), Mozilla Firefox (version not older than 3.0), Chrome (all available versions) or Opera (version not older that 2), Safari (version not older than 10).</p>
                                <p>- active Java Script</p>
                                <p>- e-mail address</p>

                            <p>3. Promotions and discounts cannot be combined.</p>
                            <p>4. In matters not regulated in these terms, consumer rights are regulated by EU law.</p>
                            <p>5. The European Commission provides a platform for online dispute resolution (OS) which you can find at http://ec.europa.eu/consumers/odr/. To participate We are not a dispute settlement procedure before a consumer arbitration board committed and not ready.</p>
                        </div>


                    </div>
                </div>

                
            </div>

        </div>


    )

}


export default ContactUs;
