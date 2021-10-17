import { connect } from 'react-redux';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = (state) => {
    const { cartItem: { name, imageUrl, quantity, price } } = state;
    const { clearItemFromCart, cartItem, addItemToCart, removeItemFromCart } = state;
    return <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</span>
    </div>
}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);