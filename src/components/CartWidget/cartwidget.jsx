import { useContext } from 'react';
import styles from './cartwidget.module.scss';
import { CartContext } from '../../contexts/CartContext';


const CartWidget = ( { icon } ) => {

  const {cartQuantity} = useContext(CartContext);


  return (

    <div>
      <img className={styles.cartview} src={icon} alt="Shopping Cart" />
      <span className={styles.quantityvisualizer}>{cartQuantity()}</span>
    </div>
  )
}

export default CartWidget