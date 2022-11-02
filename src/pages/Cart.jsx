import { useContext, useState } from 'react'
import { Context } from '../Context'
import CartItem from '../components/CartItem'

const Cart = () => {
  const [buttonText, setButtonText] = useState('Place Order')
  const {cartItems, emptyCart} = useContext(Context)
  const totalCost = 5.99 * cartItems.length
  const totalCostDisplay = totalCost.toLocaleString('en-us', {style: 'currency', currency: 'USD'})

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  function placeOrder(){
    setButtonText('Ordering...')
    setTimeout(() => {
      console.log('Order placed!')
      setButtonText('Place Order')
      emptyCart()
    }, 3000);
  }

  return (
    <main className='cart-page'>
        <h1>Check out</h1>
        {cartItemElements}
        {
          cartItems.length > 0 ? 
          <div>
            <div className="">
              <p className="total-cost">Total: {totalCostDisplay}</p>
            </div>
            <div className="order-button">
              <button onClick={placeOrder}>{buttonText}</button>
            </div>
          </div> : 
          <p>You have no items in your cart.</p>
        }
    </main>
  )
}

export default Cart