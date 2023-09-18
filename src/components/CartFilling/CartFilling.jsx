import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartArticle from '../CartArticle/CartArticle';
import { Link } from 'react-router-dom';
import styles from '../CartFilling/cartfilling.module.scss'

const CartFilling = () => {

    const {shoppingCart, overallAmount, clearAll} = useContext(CartContext);

    if (shoppingCart.length === 0) {
        return(
            <>
            <div className={styles.emptycart}>
                <h4>Shopping Cart is empty at the moment</h4>
                <Link to='/'><h5>Go choose your items!</h5></Link>
            </div>
            </>
    )}

  return (
    <>
        <div>
            {shoppingCart.map(prod => <CartArticle key={prod.id} product={prod} />)}
        </div>
        <div className={styles.bottompart}>
            <h4 className={styles.total}>Total amount to pay: ${overallAmount()}</h4>
            <button className={styles.clearbtn} onClick={clearAll}>Clear Cart</button>
            <Link to='/checkout'><button className={styles.buybtn}>Proceed To Buy</button></Link>
        </div>
    </>
  )
}

export default CartFilling