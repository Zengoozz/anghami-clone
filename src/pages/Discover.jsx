import { useDispatch, useSelector } from "react-redux";
import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { selectGenreListId } from "../redux/features/playerSlice"
import { useGetTrendingMusicQuery } from "../redux/services/shazamCore"

const Discover = () => {

    const dispatch = useDispatch()
    const { genreListId } = useSelector(state => state.player)
    const { data, isFetching, error } = useGetTrendingMusicQuery()
    const { activeSong, isPlaying } = useSelector(state => state.player)

    console.log("data:", data)

    isFetching && <Loader title='Loading songs...' />

    error && <Error />

    return (
        <div className="flex flex-col">
            <div className="flex w-full justify-between items-center sm:flex-row flex-col mt-[15px] mb-[40px]">
                <h2 className="text-white font-bold text-[40px]">
                    Discover
                </h2>
                <select
                    onChange={(e) => dispatch(selectGenreListId(e.target.value))}
                    value={genreListId || 'Pop'}
                    className="bg-black text-gray-300 rounded-[8px] text-sm p-3 outline-none sm:mt-0 mt-[20px]"
                >
                    {genres.map((genre) =>
                    (
                        <option key={genre.value} value={genre.value}>
                            {genre.title}
                        </option>
                    )
                    )}
                </select>
            </div>
            <div className="w-full grid grid-cols-4">
                {data?.tracks?.map((song, i) => (
                    <SongCard
                        key={song?.key}
                        song={song}
                        data={data}
                        activeSong={activeSong}
                        isPlaying={isPlaying}
                        index={i}
                    />
                )
                )}
            </div>
        </div>
    )
}

export default Discover;
