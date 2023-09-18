import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import styles from '../CartArticle/cartarticle.module.scss'
import { TiDelete } from 'react-icons/ti';

const CartArticle = ( { product } ) => {

    const {removeItem} = useContext(CartContext);

  return (
    <div className={styles.cartarticle}>
        <img src={product.img} alt={product.name} />
        <h5>{product.name}</h5>
        <p>Items: {product.quantity}</p>
        <p>Price for item: ${product.price}</p>
        <p>Total: ${product.quantity * product.price}</p>
        <TiDelete className={styles.deletebtn} onClick={() => removeItem(product.id)}/>
    </div>
  )
}

export default CartArticle