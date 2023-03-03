import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '395a0e58c5msh96872570360ed01p12c91djsn89f6d75d659d')

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTrendingMusic: builder.query({query:() => '/songs/list-recommendations?key=484129036&locale=en-US'}),
        getLocalMusic: builder.query({query:() => '/charts/track?pageSize=20&startFrom=0'}),
        getSearchResult: builder.query({query: (searchTerm) => `/search?term=${searchTerm}&locale=en-US&offset=0&limit=5`}),
        getArtistDetails: builder.query({query:(id) => `/artists/get-details?id=${id}`}),
        getArtistLatestReleases: builder.query({query:(id) => `artists/get-latest-release?id=${id}`}),
        getArtistTopSongs: builder.query({query:(id) => `artists/get-top-songs?id=${id}`})
    })
})

export const {
    useGetTrendingMusicQuery,
    useGetLocalMusicQuery,
    useGetSearchResultQuery,
    useGetArtistDetailsQuery,
    useGetArtistLatestReleasesQuery,
    useGetArtistTopSongsQuery
} = shazamCoreApi