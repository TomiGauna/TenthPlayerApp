import { Link } from 'react-router-dom';
import styles from './itemlist.module.scss';


const Card = ( {product} ) => {


  return (
    <Link to={`/item/${product.id}`}>
      <div className={styles.card}>
          <img src={product.img} alt={product.name} />
          <h6 key={product.id}>{product.name}</h6>
          <p>${product.price}</p>
      </div>
    </Link>
  )
}

export default Card