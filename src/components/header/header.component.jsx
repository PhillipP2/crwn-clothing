import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth, signOut } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <header className="header container">
      {console.log('header rerender')}
      {console.log(currentUser)}
      <Link to="/"><Logo className="logo" /></Link>
      <nav>
        <ul>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/">Contact</Link></li>
          
          {
            currentUser ? 
            <li><span className="signout" onClick={() => signOut(auth)}>Sign out</span></li>
            :
            <li><Link to="/signin">Sign in</Link></li>
          }
          <li><CartIcon /></li>
        </ul>
      </nav>
      <CartDropdown />
    </header>
  );
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

export default connect(mapStateToProps)(Header);