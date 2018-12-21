import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Below we are destructing our props like 
// const { label , name , value , type , placeholder , onChange } = props;
function FormInputGroups({
  label,
  name,
  value,
  type,
  placeholder,
  onChange,
  error
}) {
  return (
    
    <div className="form-group">
        <label htmlFor={label}>{label}</label>
            <input 
                type={type} 
                name={name} 
                className={classnames('form-control form-control-lg',{'is-invalid':error})}
                placeholder={placeholder} value={value} onChange={onChange}/>
        {error && <div className="invalid-feedback">{error}</div> }
    </div>
  )
}

FormInputGroups.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

FormInputGroups.defaultProps = {
    type: 'text'
}

export default FormInputGroups;