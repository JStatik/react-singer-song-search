import React, { useRef, useState } from 'react';
import useFetch from './hooks/useFetch';
import Error from './components/Error';
import Loading from './components/Loading';
import SingersSongsForm from './components/SingersSongsForm';
import Singer from './components/Singer';
import Song from './components/Song';
import SearchAgain from './components/SearchAgain';

const SingersSongsSearch = () => {
    const containerForm = useRef();

    const [ search, setSearch ] = useState( { singer: '', song: '' } );
    const { singer, song } = search;

    const { data, loading, error } = useFetch( singer, song );
    const { lyricSong, infoArtist } = data;

    return (
        <>
            <SingersSongsForm
                setSearch={ setSearch }
                containerForm={ containerForm }
            />

            { loading && <Loading /> }

            {
                error
                    &&
                <Error
                    singer={ singer }
                    song={ song }
                />
            }

            {
                ( lyricSong && infoArtist )
                    &&
                <>
                    <div className="container mt-4">
                        <div className="row">
                            <Singer singer={ infoArtist } />

                            <Song song={ lyricSong } />
                        </div>
                    </div>

                    <SearchAgain containerForm={ containerForm } />
                </>
            }
        </>
    );
};

export default SingersSongsSearch;
