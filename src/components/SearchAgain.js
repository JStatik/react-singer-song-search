import React from 'react';
import PropTypes from 'prop-types';

const SearchAgain = ( { containerForm } ) => {
    const handleClick = () => {
        containerForm.current.scrollIntoView( { behavior: 'smooth' } );
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <button className="btn btn-primary search-again" onClick={ handleClick }>
                        Volver a buscar
                    </button>
                </div>
            </div>
        </div>
    );
};

SearchAgain.propTypes = {
    containerForm: PropTypes.object.isRequired
};

export default SearchAgain;
