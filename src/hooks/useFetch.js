import { useEffect, useRef, useState } from 'react';

const useFetch = ( singer, song ) => {
    const isMountedRef = useRef( true );
    const [ state, setState ] = useState( { data: {}, loading: false, error: null } );

    useEffect( () => {
        return () => {
            isMountedRef.current = false;
        }
    }, [] )

    useEffect( () => {
        if( singer !== '' && song !== '' ) {
            setState( { data: {}, loading: true, error: null } );

            const getSingerSong = async() => {
                try{
                    const getSinger = async() => {
                        const requestSinger = await fetch( `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${ encodeURI( singer ) }` );
                        const responseSinger = await requestSinger.json();

                        return responseSinger;
                    };

                    const getSong = async() => {
                        const requestSong = await fetch( `https://api.lyrics.ovh/v1/${ encodeURI( singer ) }/${ encodeURI( song ) }` );
                        const responseSong = await requestSong.json();

                        return responseSong;
                    };

                    const [ singerAPI, songAPI ] = await Promise.all( [
                        getSinger(),
                        getSong()
                    ] );
               
                    if( !singerAPI.artists ) {
                        isMountedRef.current
                            &&
                        setState( {
                            data: {},
                            loading: false,
                            error: 'No se pudo obtener el artista.'
                        } );
                    } else if( songAPI.error || songAPI.lyrics === '' ) {
                        isMountedRef.current
                            &&
                        setState( {
                            data: {},
                            loading: false,
                            error: 'No se pudo obtener la canción.'
                        } );
                    } else {
                        isMountedRef.current
                            &&
                        setState( {
                            data: {
                                lyricSong: songAPI.lyrics,
                                infoArtist: singerAPI.artists[ 0 ]
                            },
                            loading: false,
                            error: null
                        } );
                    }  
                } catch( err ) {
                    setState( { data: {}, loading: false, error: err } );
                }
            }

            getSingerSong();
        }
    }, [ singer, song ] );

    return state;
};

export default useFetch;
