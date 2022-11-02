import {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import { Context } from '../Context'

const Image = ({className, img}) => {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

    const heartIcon = () => {
        if(img.isFavorite) {
            return <i className="fa fa-heart favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="fa-regular fa-heart favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon(){
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart){
            return <i className="fa fa-shopping-cart cart" onClick={() => removeFromCart(img.id)}></i>
        } else if(hovered){
            return <i className="fa fa-plus-circle cart" onClick={() => addToCart(img)}></i>
        }
    }
    
  return (
    <div 
        className={`${className} image-container`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
        <img className='image-grid' src={img.url} alt="" />
        {heartIcon()}
        {cartIcon()}
    </div>
  ) 
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image