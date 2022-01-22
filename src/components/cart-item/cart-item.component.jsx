import './cart-item.styles.scss';

const CartItem = ({ name, imageUrl, price, quantity }) => (
  <li className="cart-item">
    <img src={imageUrl} alt={name} />
    <div>
      <p className="item-name">{name}</p>
      <span className="price-info">{`${quantity} x $${price}`}</span>
    </div>
  </li>
);

export default CartItem;