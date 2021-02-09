import React from 'react';
import PropTypes from 'prop-types';
import BiopicSinger from './Singer/BiopicSinger';
import SocialSinger from './Singer/SocialSinger';

const Singer = ( { singer } ) => {
    const { strArtist, strArtistThumb, strBiographyEN, strBiographyES, strFacebook, strGenre, strTwitter } = singer;

    return (
        <div className="col-md-6">
            <div className="card border-light">
                <div className="card-header bg-primary text-light font-weight-bold">
                    Información del artista
                </div>

                <BiopicSinger
                    enBiopic={ strBiographyEN }
                    esBiopic={ strBiographyES ? strBiographyES : '' }
                    genre={ strGenre }
                    image={ strArtistThumb }
                    name={ strArtist }
                />

                {
                    ( strFacebook && strTwitter )
                        &&
                    <SocialSinger
                        facebook={ strFacebook }
                        twitter={ strTwitter }
                    />
                }
            </div>
        </div>
    );
};

Singer.propTypes = {
    singer: PropTypes.object.isRequired
};

export default Singer;
