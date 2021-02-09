import React from 'react';
import PropTypes from 'prop-types';

const Input = ( { error, handleInputChange, label, name, placeholder, value } ) => {
    return (
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor={ name } className="form-label">{ label }</label>
                <input
                    type="text"
                    className={ `form-control ${ error && 'is-invalid' }` }
                    id={ name }
                    name={ name }
                    onChange={ handleInputChange }
                    placeholder={ placeholder }
                    value={ value }
                    
                />
                <div className="invalid-feedback">
                    { error }
                </div>
            </div>
        </div>
    );
};

Input.propTypes = {
    error: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default Input;
