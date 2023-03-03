import { useDispatch } from "react-redux"
import { playPause, setActiveSong } from "../redux/features/playerSlice"
import PlayPause from "./PlayPause"


const SongCard = ({ song, isPlaying, activeSong, data, index }) => {

  const dispatch = useDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }))
    dispatch(playPause(true))
  }

  return (
    <div className="text-white bg-white/5 bg-opacity-80 backdrop-blur-sm rounded-[20px] w-[350px] p-[20px] my-[10px] animate-slideup">
      <div className="relative h-[250px] w-full rounded-[20px] group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex group-hover:cursor-pointer ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            song={song}
          />
        </div>
        <img className="h-full w-full rounded-[20px]"
          src={song?.images?.coverarthq} alt="song_coverArt" />
      </div>
      <div className="mt-[10px]">
        <h2 className="font-semibold text-[20px]">
          {song?.title}
        </h2>
        <p className="text-red-700 mt-[5px] text-[15px]">
          {song?.subtitle}
        </p>
      </div>
    </div>
  )
}

export default SongCard;
