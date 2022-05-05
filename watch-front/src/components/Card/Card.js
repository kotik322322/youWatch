import React from 'react';
import styles from '../Card/Card.module.scss';
import favorite from '../../assets/card/favorite.svg'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';



const Card = ({ imageUrl, name, price, _id, path, addToCart, text }) => {



  return (
    <div key={_id} className={styles.card}>
      <img className={styles.cardFavorite} src={favorite} alt="favorite" />

      <Link
        style={{ color: "inherit" }}
        to={path}>

        <div className={styles.cardImg}>
          <img src={imageUrl} alt="itemImg" />
        </div>

        <h3 className={styles.cardTitle}>
          {name.length > 80 ?
            `${name.substring(0, 80)}...` : name
          }
        </h3>

      </Link>

      <p className={styles.cardPrice}>
        {price}
      </p>


      <Button
        text={text}
        onClick={addToCart}
      />


    </div>
  )
}

export default Card