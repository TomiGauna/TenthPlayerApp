//Este proceso se denomina: sedear la db

import { collection, addDoc } from "firebase/firestore";
import db from "./firebase-config.js";
import products from "../src/components/products/allshirts.js";

const articlesRef = collection(db, "products");
const promises = products.map((product) => addDoc(articlesRef, product)); 

Promise.all(promises).then(() => {
    console.log('Succesfully saved');
    process.exit(0);
})