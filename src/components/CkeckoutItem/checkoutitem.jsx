import styles from '../CkeckoutItem/checkoutitem.module.scss'

const CheckoutItem = ( {product} ) => {

    const subTotal = product.price * product.quantity;

  return (
    <div className={styles.itemcontainer}>
        <ul>
            <li>
                <p>{product.name}</p>
                <p>${product.price}</p>
                <p>Items: {product.quantity}</p>
                <p>Subtotal: ${subTotal}</p>
            </li>
        </ul>
    </div>
  )
}

export default CheckoutItem