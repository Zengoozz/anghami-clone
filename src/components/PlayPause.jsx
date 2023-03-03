
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ activeSong, song, isPlaying, handlePlay, handlePause }) => (
  (isPlaying && activeSong?.title === song?.title) ?
    (
      <FaPauseCircle
        size={35}
        className="text-gray-300"
        onClick={handlePause}
      />
    ) :
    (
      <FaPlayCircle
        size={35}
        className="text-gray-300"
        onClick={handlePlay}
      />
    )
);

export default PlayPause;
