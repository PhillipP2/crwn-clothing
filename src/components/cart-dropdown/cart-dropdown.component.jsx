import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ hidden, cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className={`cart-dropdown ${hidden ? 'hidden' : ''}`} >
      {console.log('rerender dropdown')}
      {cartItems.length === 0 ? <span>Cart is empty</span> : ''}
      <ul className="cart-items">
        {cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem}/>)}
      </ul>
      <CustomButton onClick={() => {
        navigate('/checkout');
        dispatch(toggleCartHidden());
      }}
      utilityClasses="bg-white">
        Go to checkout
      </CustomButton>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  cartItems: selectCartItems
})



export default connect(mapStateToProps)(CartDropdown);