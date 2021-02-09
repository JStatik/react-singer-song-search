import React from 'react';
import PropTypes from 'prop-types';

const Error = ( { singer, song } ) => {
    return (
        <>
            <div className="container-error">
                <p>
                    No se obtuvieron resultados para:
                </p>
                
                <ul>
                    <li>Artista <span>{ singer }</span></li>
                    <li>Canción <span>{ song }</span></li>
                </ul>
            </div>
        </>
    );
};

Error.propTypes = {
    singer: PropTypes.string.isRequired,
    song: PropTypes.string.isRequired
};

export default Error;
