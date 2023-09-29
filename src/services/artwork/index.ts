import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Artwork } from "./types";

export const artworkApi = createApi({
  reducerPath: "artworkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://corsproxy.io/?https://api.artic.edu/api/v1/",
  }),
  endpoints: (builder) => ({
    getArtworks: builder.query<Artwork[], void>({
      query: () => "artworks",
      transformResponse: (response: { data: Artwork[] }) => response.data,
    }),
    getArtworkByName: builder.query<Artwork, string>({
      query: (id) => `artworks/${id}`,
      transformResponse: (response: { data: Artwork }) => response.data,
    }),
  }),
});

export const { useGetArtworksQuery, useGetArtworkByNameQuery } = artworkApi;
