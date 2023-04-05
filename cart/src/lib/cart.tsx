import { error } from 'console';
import styles from './cart.module.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface CartProps { }

export function Cart(props: CartProps) {
  interface Value {
    message: string;
  }
  
  const [value, setValue] = useState<Value>({ message: '' });
  const { message } = value;
  const getName = async () => {
    try {
      const response = await axios.get("http://localhost:3333/")
      setValue(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getName()
  }, [])


  return (
    <div className={styles['container']}>
      <h1>{`Welcome to Cart!,${message}`}</h1>
    </div>
  );
}

export default Cart;
