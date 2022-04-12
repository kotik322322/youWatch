import React from 'react'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import favoriteList from '../../assets/favorite-list.svg'
import person from '../../assets/person.svg'
import cart from '../../assets/cart.svg'
import styles from '../Header/Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <Link className={styles.headerIcons} to='/'>
            <img src={logo} alt="Logo" />
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
          <img className={styles.headerSearchImg} src={search} alt="Search" />
        </div>

        <ul className={styles.headerPanel}>
          <Link className={styles.headerIcons} to='/favorite'>
            <img src={favoriteList} alt="Favorites" />
          </Link>

          <Link className={styles.headerIcons} to='/login'>
            <img src={person} alt="Login" />
          </Link>

          <Link className={styles.headerIcons} to='/cart'>
            <img src={cart} alt="Cart" />
          </Link>



        </ul>
      </div>


    </header>
  )
}

export default Header