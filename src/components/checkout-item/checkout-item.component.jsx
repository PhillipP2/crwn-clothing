import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, addItem, deleteItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <li className="checkout-item">
      <img src={imageUrl} alt="checkout item" />
      <p>{name}</p>
      <div>
        <button onClick={() => deleteItem(cartItem)} className="arrow-btn">&#10094;</button>
         <span className="quantity">{quantity}</span>
        <button onClick={() => addItem(cartItem)} className="arrow-btn">&#10095;</button>
      </div>
      <p>${price * quantity}</p>
      <button onClick={() => deleteItem(cartItem)} className="remove-btn">&#10005;</button>
    </li>
  )
}
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  deleteItem: item => dispatch(deleteItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);