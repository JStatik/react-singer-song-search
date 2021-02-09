import validator from 'validator';

const isValidFormSingersSongsForm = ( singer, song ) => {
    if( singer.trim().length < 2 || validator.isEmpty( singer ) || !validator.isAlpha( singer, [ 'es-ES' ], { ignore: ' 1234567890' } ) ) {
        return {
            errorSingersSongs: 'Todos los campos son obligatorios.',
            isValid: false
        };
    } else if( song.trim().length < 2 || validator.isEmpty( song ) || !validator.isAlpha( song, [ 'es-ES' ], { ignore: ' 1234567890' } ) ) {
        return {
            errorSingersSongs: 'Todos los campos son obligatorios.',
            isValid: false
        };
    }

    return {
        errorSingersSongs: null,
        isValid: true
    };
};

export default isValidFormSingersSongsForm;
