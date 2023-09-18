import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../ItemList/itemlist';
import styles from '../ItemListContainer(Home)/itemlistcontainer.module.scss';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ControlledCarousel from '../Carousel/carousel';


const Itemlistcontainer = () => {

  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryName } = useParams();

  useEffect(() => {
    const database = getFirestore();
    const queryCollection = collection(database, 'products');

    if (categoryName) {
        const filter = query(queryCollection, where('league', '==', categoryName));
          getDocs(filter)
            .then(resp => setProducts(resp.docs.map(product => ({ ...product.data(), id: product.id }))));
            setLoading(false)
      } else {
          getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(product => ({ ...product.data(), id: product.id, }))));
          setLoading(false);
        }
  }, [categoryName]);

  if (loading) {
    
   return <div className={styles.ldsroller}><div></div><div></div><div></div><div></div></div>
  
  }



  return (
    <>
    <ControlledCarousel />
    <div className={styles.itemlistcontainer}>
      {products.map((product) => 
      <Card key={product.id}  product={product}  />)}
    </div>
    </>
  )
}

export default Itemlistcontainer