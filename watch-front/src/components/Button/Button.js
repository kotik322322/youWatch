import React from 'react'
import styles from '../Button/Button.module.scss'


const Button = ({ text, onClick}) => {
  return (
    <>
        <button onClick={onClick}  className={styles.button} role="button">{text}</button>
    </>
  )
}

export default Button