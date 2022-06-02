import React from 'react'
import styles from '../Header/Header.module.scss'
import { Link } from 'react-router-dom'
//React Icons
import { AiOutlineHeart } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GrCart } from "react-icons/gr"
import { GrSearch } from "react-icons/gr"
import { GlobalState } from "../../GloabalState"


const Header = ({ icons }) => {
  const state = React.useContext(GlobalState)
  const [cart, setCart] = state.cart

  const cartCounter = cart.reduce(
    (acc, item) => acc + item.quantity,
    0)

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <Link className={styles.headerIcons} to='/'>
            <img src={icons.logo} alt="Logo" />
          </Link>
        </div>

        <div>
          <nav className={styles.navigation}>
            <Link className={styles.navigationList} to='/store'>
              Store
            </Link>
            <Link className={styles.navigationList} to='/contact_us'>
              Contact Us
            </Link>
            <Link className={styles.navigationList} to='/blog'>
              Blog
            </Link>


          </nav>
        </div>

        <div className={styles.headerSearch}>
          <input className={styles.headerSearchInput} placeholder="Search..." type="text" />
          <GrSearch style={{ fontSize: "28px", color: "#222222" }} />
        </div>

        <ul className={styles.headerPanel}>
          <Link className={styles.headerIconHeart} to='/favorite'>
            <AiOutlineHeart style={{ fontSize: "30px", color: "#222222" }} />
          </Link>

          <Link className={styles.headerIconPerson} to='/login'>
            <BsPerson style={{ fontSize: "33px", color: "#222222" }} />
          </Link>

          <Link className={styles.headerIconCart} to='/cart'>
            {cart.length === 0
              ? null
              : <span className={styles.headerIconCount}>{cartCounter}</span>
            }
            <GrCart style={{ fontSize: "30px", color: "#222222" }} />
          </Link>



        </ul>
      </div>


    </header>
  )
}

export default Header