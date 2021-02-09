import React from 'react';
import PropTypes from 'prop-types';

const SocialSinger = ( { facebook, twitter } ) => {
    return (
        <div className="card-body">
            <div className="row text-center">
                <div className="col-6">
                    <a href={ `https://${ facebook }` } target="_blank" rel="noopener noreferrer" className="icon">
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>

                <div className="col-6">
                    <a href={ `https://${ twitter }` } target="_blank" rel="noopener noreferrer" className="icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

SocialSinger.propTypes = {
    facebook: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired
};

export default SocialSinger;
