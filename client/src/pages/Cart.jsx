import React, { useContext } from 'react'

const Cart = () => {

  const {products, currency, cartItems} = useContext(ShopContext);

  return (
    <div>Cart</div>
  )
}

export default Cart