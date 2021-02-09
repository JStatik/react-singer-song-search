import React from 'react';
import PropTypes from 'prop-types';

const Title = React.memo( ( { title } ) => {
    return (
        <legend className="text-center">
            { title }
        </legend>
    );
} );

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;
