import React from 'react';
import PropTypes from 'prop-types';

const Song = ( { song } ) => {
    return (
        <div className="col-md-6">
            <h2>Letra de la canción</h2>
            <p className="lyric">
                { song }
            </p>
        </div>
    );
};

Song.propTypes = {
    song: PropTypes.string.isRequired
};

export default Song;
