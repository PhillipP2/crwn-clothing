import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, name, label, ...otherProps}) => {
  const textInputRef = React.createRef();
  const focusLabel = () => {
    textInputRef.current.focus();
  }
  return (
    <div className="input-group" onClick={focusLabel}>
      <input ref={textInputRef} className="form-input" onChange={handleChange} name={name} {...otherProps}/>
      {
        label ?
        <label>
          {label}
        </label>
        : null
      }
    </div>
);
}

export default FormInput;