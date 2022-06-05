import React from 'react';
import styles from '../Card/Card.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { GlobalState } from '../../GloabalState';


const Card = ({ _id, path, addToCart, text, item }) => {
  const state = React.useContext(GlobalState)
  const [favorite, setFavorite] = state.favorite
  const [atFavorite, setAtFavorite] = React.useState(item.atFavorite)

  const toggleFavorite = (product) => {

    const productExist = favorite.find(item => item._id === product._id)
    if (productExist) {
      const result = favorite.filter(item => item._id !== product._id)

      localStorage.setItem('favorite', JSON.stringify(result))
      setFavorite(JSON.parse(localStorage.getItem('favorite')))
      setAtFavorite(false)
    } else {
      const result = [...favorite, { ...product, atFavorite: true }]
      localStorage.setItem('favorite', JSON.stringify(result))
      setFavorite(JSON.parse(localStorage.getItem('favorite')))
      setAtFavorite(true)
    }

  }


  return (
    <div key={_id} className={styles.card}>


      <div
        onClick={() => toggleFavorite(item)}
        className={styles.cardFavorite}>
        {atFavorite === true
          ? <AiFillHeart style={{ fontSize: '35px', cursor: 'pointer' }} />
          : <AiOutlineHeart style={{ fontSize: '35px', cursor: 'pointer' }} />}
      </div>




      <Link
        style={{ color: "inherit" }}
        to={path}>

        <div className={styles.cardImg}>
          <img src={item.imageUrl[0]} alt="itemImg" />
        </div>

        <h3 className={styles.cardTitle}>
          {item.name.length > 80 ?
            `${item.name.substring(0, 80)}...` : item.name
          }
        </h3>

      </Link>

      <p className={styles.cardPrice}>
        $ {item.price}
      </p>


      <Button
        text={text}
        onClick={addToCart}
      />


    </div>
  )
}

export default Card;