import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import useForm from '../hooks/useForm';
import isValidFormSingersSongsForm from '../helpers/isValidFormSingersSongsForm';
import Input from './SingersSongsForm/Input';
import SubmitButton from './SingersSongsForm/SubmitButton';
import Title from './SingersSongsForm/Title';

const SingersSongsForm = ( { containerForm, setSearch } ) => {
    const [ formValues, handleInputChange, reset ] = useForm( { singer: '', song: '' } );
    const { singer, song } = formValues;

    const [ error, setError ] = useState( null );
    const [ disabled, setDisabled ] = useState( false );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        setDisabled( true );

        const escapedSinger = validator.escape( singer );
        const escapedSong = validator.escape( song );

        const { errorSingersSongs, isValid } = isValidFormSingersSongsForm( escapedSinger, escapedSong );
        setError( errorSingersSongs );

        if( isValid ) {
            setSearch( {
                singer: escapedSinger,
                song: escapedSong
            } );

            reset();
        }

        setDisabled( false );
    };

    return (
        <div className="bg-secondary" ref={ containerForm }>
            <div className="container">
                <div className="row">
                    <form className="col card text-white bg-transparent mb-2 pt-5 pb-2" autoComplete="off" onSubmit={ handleSubmit }>
                        <fieldset>
                            <Title title="ARTISTAS Y CANCIONES" />

                            <div className="row">
                                <Input
                                    name="singer"
                                    label="Artista"
                                    placeholder="Buscar artista..."
                                    value={ singer }
                                    handleInputChange={ handleInputChange }
                                    error={ !error ? '' : error }
                                />

                                <Input
                                    name="song"
                                    label="Canción"
                                    placeholder="Buscar canción..."
                                    value={ song }
                                    handleInputChange={ handleInputChange }
                                    error={ !error ? '' : error }
                                />
                            </div>

                            <SubmitButton disabled={ disabled } />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

SingersSongsForm.propTypes = {
    containerForm: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired
};

export default SingersSongsForm;
