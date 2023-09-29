import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Artwork } from "./types";

interface ArtworksResponse<T> {
  config: {
    iiif_url: string;
    website_url: string;
  };
  info: {
    license_text: string;
    license_links: string[];
    version: string;
  };
  data: T[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    prev_url: string;
    next_url: string;
  };
}

export const artworkApi = createApi({
  reducerPath: "artworkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://corsproxy.io/?https://api.artic.edu/api/v1/",
  }),
  endpoints: (builder) => ({
    getArtworksByPage: builder.query<ArtworksResponse<Artwork>, string | void>({
      query: (page = "1") => `artworks?page=${page}`,
    }),
    getArtworkByName: builder.query<Artwork, string>({
      query: (id) => `artworks/${id}`,
      transformResponse: (response: { data: Artwork }) => response.data,
    }),
  }),
});

export const { useGetArtworksByPageQuery, useGetArtworkByNameQuery } =
  artworkApi;
