import '../styles.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context'

const Header = () => {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? 'fa fa-shopping-cart' : 'far fa-shopping-cart'

  return (
    <header>
        <Link to='/'>
            <h2>Pic Some</h2>
        </Link>
        <Link to='/cart'>
            <i className={`${cartClassName} fa-2x`}></i>
        </Link>
    </header>
  )
}

export default Header