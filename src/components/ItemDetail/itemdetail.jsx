import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import styles from './itemdetail.module.scss'
import { CartContext } from '../../contexts/CartContext';
import { BsCartPlus } from "react-icons/bs";
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ArticleDetail = () => {
 
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
      const db = getFirestore();
      const docCall = doc(db, 'products', id);


      getDoc(docCall)
        .then(response => setProduct({ ...response.data(), id: response.id, }))
    }, [id])


    if(!product){
      return <Navigate to='/404' />
    }

    const [count, setCount] = useState(1);

    const increaseQuantity = () => {
      setCount(count + 1);
    }

    const decreaseQuantity = () => {
      setCount(count - 1);
    }

    const {pushItem} = useContext(CartContext);

 
  return (
    <div className={styles.detailcontainer}>
      <div className={styles.maincontainers}>
          <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.container2}>
          <h4 key={product.id}>{product.name}</h4>
          <h6>${product.price}</h6>
          <p>Team: {product.team}</p>
          <p>League: {product.shownleague}</p>
          <div className={styles.form}>
            <p>Items:</p>
            <button disabled={count <= 1} onClick={decreaseQuantity}>-</button>
            <input 
              onChange={(e) => setCount(e.target.value)}
              value={count} />
            <button onClick={increaseQuantity}>+</button>
          </div>
          <button className={styles.buybtn} onClick={() => pushItem(product, count)} >Add To Cart <BsCartPlus /></button>
      </div>
    </div>
  )
}

export default ArticleDetail