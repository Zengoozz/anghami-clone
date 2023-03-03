import { useSelector } from 'react-redux';


import { SongCard } from '../components';
import { useGetLocalMusicQuery } from '../redux/services/shazamCore';

const AroundYou = () => {

    const { data, isFetching, error } = useGetLocalMusicQuery()
    const { activeSong, isPlaying } = useSelector(state => state.player)

    console.log(data)

    return (
        <div>
            <h2 className="text-white font-bold text-[40px] mt-[15px] mb-[40px]">
                Around You
            </h2>
            <div className="w-full grid grid-cols-4">
                {data?.tracks?.map((song, i) => {
                    return (
                        <SongCard
                            key={song?.key}
                            song={song}
                            data={data}
                            activeSong={activeSong}
                            isPlaying={isPlaying}
                            index={i}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default AroundYou;
