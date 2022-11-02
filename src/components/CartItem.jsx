import {useContext, useState} from 'react'
import PropTypes from "prop-types"
import { Context } from '../Context'

const CartItem = ({item}) => {
    const [hovered, setHovered] = useState(false)
    const {removeFromCart} = useContext(Context)

    const iconClassName = hovered ? "fa fa-trash" : "fa fa-trash"

  return (
    <div className="cart-item">
        <i 
            class={iconClassName}
            onClick={() => removeFromCart(item.id)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
        </i>
        <img src={item.url} width='130px' alt="" />
        <p>$5.99</p>
    </div>
  )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem