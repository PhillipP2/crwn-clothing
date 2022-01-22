import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isSignInWithGoogle, utilityClasses, ...otherProps }) => (
  <button 
  className={`custom-button ${isSignInWithGoogle? 'google-sign-in ': ''}${utilityClasses ? utilityClasses : ''}`} 
  {...otherProps}>
    {children}
  </button>
);

export default CustomButton;