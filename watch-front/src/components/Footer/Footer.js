import React from 'react'
import styles from '../Footer/Footer.module.scss'



const Footer = ({ icons }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContacts}>
          <p className={styles.footerContactsUs}> Contact us</p>
          <a href="tel:+380990220193">Tel +38 (099) 022-01-02</a>
          <a href="tel:+380992139898">Tel +38 (063) 213-98-98</a>
          <a className={styles.footerContactsMail} href="mailto:info@you-watch.com">info@you-watch.com</a>
          <p className={styles.footerContactsAddress}>400 Aldridge Rd, Birmingham B44 8BH, UK</p>
        </div>

        <div className={styles.footerServices}>
          <p>Services </p>
          <a href="https://support.apple.com/watch/repair/service" target="_blank">Watch repair</a>
          <a href="https://www.termsfeed.com/blog/sample-return-policy-ecommerce-stores/" target="_blank">Return policy</a>
          <a href="https://www.apple.com/shop/trade-in" target="_blank">Trade In</a>
        </div>


        <div className={styles.footerLinks}>
          <div className={styles.footerSocial}>
            <div className={styles.footerSocialMedia}>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={icons.facebook} alt="facebook" />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <img src={icons.twitter} alt="twitter" />
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={icons.instagram} alt="instagram" />
              </a>
              <a href="https://www.youtube.com/" target="_blank">
                <img src={icons.youtube} alt="youtube" />
              </a>
            </div>

            <div className={styles.footerSocialMessengers}>
              <a href="https://apps.apple.com/us/app/viber-messenger-chats-calls/id382617920" target="_blank">
                <img src={icons.viber} alt="viber" />
              </a>
              <a href="https://apps.apple.com/ru/app/telegram/id686449807" target="_blank">
                <img src={icons.telegram} alt="telegram" />
              </a>
            </div>

          </div>

          <div className={styles.footerPay}>
            <a href="https://www.mastercard.us/en-us.html" target="_blank">
              <img src={icons.mastercard} alt="mastercard" />
            </a>
            <a href="https://www.visa.com.ua/" target="_blank">
              <img src={icons.visa} alt="visa" />
            </a>
            <a href="https://www.paypal.com/" target="_blank">
              <img src={icons.paypal} alt="paypal" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer