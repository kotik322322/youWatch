import React from 'react'
import styles from '../Button/Button.module.scss'


const Button = ({onclick, text}) => {
  return (
    <>
        <button onClick={onclick} className={styles.button} role="button">{text}</button>
    </>
  )
}

export default Button