import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";

import { useGetArtistDetailsQuery, useGetArtistLatestReleasesQuery, useGetArtistTopSongsQuery } from "../redux/services/shazamCore";

const SongsPreview = ({ song, index }) => (
  <div className="w-[200px]">
    <img className="w-[200px] rounded-[20px]"
      src={song.attributes?.artwork?.url?.replace("{w}", 2400).replace("{h}", 2400)} alt="song cover" />
    <div className="py-[5px] px-[10px]">
      <h3 className="text-white font-medium text-[20px]">
        {song.attributes?.name}
      </h3>
      <p className="text-gray-500">
        {new Date(song.attributes?.releaseDate).toLocaleDateString('default', { month: 'long', year: 'numeric' })}
      </p>
    </div>
  </div>
)

const ArtistDetails = () => {

  const { id } = useParams()
  const { data: artistData, isFetching, error } = useGetArtistDetailsQuery(id)
  const { data: latestReleases } = useGetArtistLatestReleasesQuery(id)
  const { data: topSongs } = useGetArtistTopSongsQuery(id)
  console.log(topSongs);
  return (
    <div className="mt-[25px] flex flex-1">
      <div className="w-[300px] flex flex-col">
        <img className="w-[300px] h-[300px] rounded-full"
          src={artistData?.data[0]?.attributes?.artwork?.url?.replace("{w}", 2400).replace("{h}", 2400)} alt="" />
        <h2 className="my-[10px] text-[60px] text-white font-bold">
          {artistData?.data[0]?.attributes?.name}
        </h2>
        <span>
          {artistData?.data[0]?.attributes?.genreNames.map(genre => (
            <p className="inline text-gray-400 bg-black font-medium uppercase p-[10px] rounded-[10px]">
              {genre}
            </p>
          ))}
        </span>
      </div>

      <div className="ml-[40px]">
        <div>
          <h2 className="text-white font-bold text-[40px] mt-[15px] mb-[20px]">
            Latest Releases
          </h2>
          {latestReleases?.data.map((song, i) => (
            <SongsPreview
              key={song.id}
              song={song}
              index={i}
            />
          ))}
        </div>

        <div className="w-full flex flex-col">
          <h2 className="text-white font-bold text-[40px] mt-[15px] mb-[20px]">
            Top Songs
          </h2>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={15}
            // loop={true}
            freeMode={true}
            // freeMode={{ enabled: true, sticky: false }}
            // centeredSlides
            // centeredSlidesBounds
            modules={[FreeMode]}
            className="mt-4"
          >
            {topSongs?.data?.map((song, i) => {
              return (
                <SwiperSlide
                  key={song.id}
                  style={{ width: '10%', display: 'flex' }}
                  className="animate-slideright"
                >
                  <span className="w-[200px]">

                    <SongsPreview
                      song={song}
                      index={i}
                    />
                  </span>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

      </div>

    </div>
  );
}

export default ArtistDetails;
