import React from 'react';
import PropTypes from 'prop-types';

const BiopicSinger = ( { enBiopic, esBiopic, genre, image, name } ) => {
    return (
        <div className="card-body">
            <img src={ image } alt={ name }/>
            <p className="card-text">Género: { genre }</p>

            <h3>Biografía de { name }</h3>
            <p className="card-text text-justify biopic">
                {
                    esBiopic ? esBiopic : enBiopic
                }
            </p>
        </div>
    );
};

BiopicSinger.propTypes = {
    enBiopic: PropTypes.string.isRequired,
    esBiopic: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default BiopicSinger;
