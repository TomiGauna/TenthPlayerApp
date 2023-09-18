import React, { useContext, useState } from 'react';
import { TextField } from '@mui/material';
import styles from '../CheckOut/checkout.module.scss'
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../CkeckoutItem/checkoutitem';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Checkout = () => {

    const { shoppingCart, overallAmount, clearAll }  = useContext(CartContext)

    const [input, setInput] = useState("");
    const [firstNameInput, setFirstNameInput] = useState("");
    const [lastNameInput, setLastNameInput] = useState("");
    const [email, setEmail] = useState("");
    const [confirmation, setConfirmation] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleFirstName = (e) => {
        setFirstNameInput(e.target.value);
    };

    const handleLastName = (e) => {
        setLastNameInput(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleConfirmation = (e) => {
        setConfirmation(e.target.value);
    };

    const order ={
        buyerData: {
            cardNamber: input,
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: email,
        },
        

        boughtArticles: shoppingCart
            .map(prod => ({ id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity})),
        
        totalPrice: overallAmount(),
        date: new Date(),
        state: 'generated',
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const ordersRef = collection(db, 'orders');
        addDoc(ordersRef, order)
          .then(({ id }) => {
            setInput("");
            setFirstNameInput("");
            setLastNameInput("");
            setEmail("");
            setConfirmation("");
            clearAll();
      
            const MySwal = withReactContent(Swal);
            MySwal.fire({
              title: <strong>Congratulations! You've just bought our products</strong>,
              html: <i>Your order id is: {id}</i>,
              icon: 'success'
            });
          });
      };
    

    

  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form} method='post' >
            <h5>Complete the following form</h5>
            <TextField onChange={handleInput} value={input} className={styles.textfield1} id="filled-basic" label="Card Number" variant="filled" />
            <TextField onChange={handleFirstName} value={firstNameInput} className={styles.textfield2} id="filled-basic" label="First Name" variant="standard" />
            <TextField onChange={handleLastName} value={lastNameInput} className={styles.textfield3} id="filled-basic" label="Last Name" variant="standard" />
            <TextField onChange={handleEmail} value={email} className={styles.textfield4} id="filled-basic" label="E-mail" variant="standard" />
            <TextField onChange={handleConfirmation} value={confirmation} className={styles.textfield5} id="filled-basic" label="Confirm e-mail" variant="filled" />
        </form>
        <div className={styles.checkoutitems}> 
            <h5>Chosen Articles</h5>
            {shoppingCart.map((prod) => 
                <CheckoutItem key={prod.id} product={prod} />)}
            <div className={styles.bottom}>
                <p>Total: ${overallAmount()}</p>
                <button onClick={handleSubmit}>Finish Purchase</button>
            </div>
        </div>      
    </div>
  )
}

export default Checkout