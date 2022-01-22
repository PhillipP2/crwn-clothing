import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInPage from './pages/sign-in-page/sign-in-page.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';
import Header from './components/header/header.component';
import { Route, Routes, Navigate } from 'react-router-dom';
import { auth, onAuthStateChanged, createUserProfileDocument, onSnapshot } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import './App.css';
import React from 'react';

class App extends React.Component {
  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
      if (!userAuth) {
        this.props.setCurrentUser(null)
        return;
      }

      const userRef = await createUserProfileDocument(userAuth);
      this.unsubscribeFromSnapshot = onSnapshot(userRef, snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        });
      });
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();  
    this.unsubscribeFromSnapshot();
  }

  render() {
    return (
      <div>
        {console.log('app.js', this.props.currentUser)}
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop/*" element={<ShopPage />} />
          <Route path="/signin" element={this.props.currentUser ? <Navigate to="/" replace/> : <SignInPage/>} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
