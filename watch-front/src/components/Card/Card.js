import React from 'react';
import styles from '../Card/Card.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
// import favorite from '../../assets/card/favorite.svg'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'



const Card = ({ imageUrl, name, price, _id, path, addToCart, text }) => {

  const [atFavorite, setAtFavorite] = React.useState(false)



  return (
    <div key={_id} className={styles.card}>


      <div
        className={styles.cardFavorite}>
        {atFavorite === true
          ? <AiFillHeart style={{ fontSize: '35px', cursor: 'pointer' }} />
          : <AiOutlineHeart style={{ fontSize: '35px', cursor: 'pointer' }} />}
      </div>




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