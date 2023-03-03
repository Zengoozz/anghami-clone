import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/free-mode';

import { SongCard } from '../components';
import { useGetSearchResultQuery } from "../redux/services/shazamCore";

const Search = () => {
  const { searchTerm } = useParams()
  const { activeSong, isPlaying } = useSelector(state => state.player)
  const { data, isFetching, error } = useGetSearchResultQuery(searchTerm)
  // console.log(data?.artists.hits[0])
  return (
    <div>
      <div>
        <h2 className="text-white font-bold text-[40px] mt-[15px] mb-[40px]">
          Tracks
        </h2>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {data?.tracks?.hits?.map((song, i) => {
            return (
              <SwiperSlide
                key={song.track.key}
                style={{ width: '20%', height: 'auto' }}
                className="shadow-lg animate-slideright"
              >
                <SongCard
                  key={song?.track?.key}
                  song={song?.track}
                  data={data}
                  activeSong={activeSong}
                  isPlaying={isPlaying}
                  index={i}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div>
        <h2 className="text-white font-bold text-[40px] mt-[15px] mb-[40px]">
          Artists
        </h2>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {data?.artists?.hits?.map((item, i) => (
            <SwiperSlide
              key={item.artist.adamid}
              style={{ width: '20%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${item.artist.adamid}`}>
                <img className="rounded-full w-full object-cover"
                  src={item.artist.avatar} alt="avatar" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Search;
