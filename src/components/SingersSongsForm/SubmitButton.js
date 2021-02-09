import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = React.memo( ( { disabled } ) => {
    return (
        <div className="row justify-content-center">
            <div className="col">
                <button
                    type="submit"
                    className="btn btn-primary btn-submit"
                    disabled={ disabled }
                >
                    BUSCAR
                </button>
            </div>
        </div>
    );
} );

SubmitButton.propTypes = {
    disabled: PropTypes.bool.isRequired
};

export default SubmitButton;
