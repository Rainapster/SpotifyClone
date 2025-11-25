import { useCallback, useState } from "react";
import getSpotifyToken from "../utils/spotifyAuth";
import {
  type SpotifyPlaylistTrack,
  type MusicCategory,
  type SpotifyCategoriesResponse,
  type SpotifyPlaylist,
  type SpotifyPlaylistSearchResponse,
  type SpotifyPlaylistTracksResponse,
  type SpotifyTrackItem,
  type SEARCH_TYPE,
  type SpotifySearchResponse,
  type SEARCH_TYPES,
} from "../models/music.model";

//tutte le categorie di musica
export const useMusicCategories = () => {
  const [genres, setGenres] = useState<MusicCategory[]>();
  const retriveMusicGenre = useCallback(async () => {
    try {
      const token = await getSpotifyToken();

      const result = await fetch(
        "https://api.spotify.com/v1/browse/categories?country=IT&limit=50",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data: SpotifyCategoriesResponse = await result.json();
      console.log("Categorie disponibili:", data.categories.items);

      setGenres(data.categories.items);
    } catch (error) {
      console.error("Errore durante il recupero dei generi musicali:", error);
    }
  }, []);

  return { retriveMusicGenre, genres };
};

// cerco le playlist tramite il nome della categoria
export const useSearchPlaylistsByGenre = () => {
  const [playlists, setPlaylists] = useState<SpotifyPlaylist[] | null>(null);

  const searchPlaylists = useCallback(async (genre: string) => {
    try {
      const token = await getSpotifyToken();
      const result = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          genre
        )}&type=playlist&limit=20`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!result.ok) {
        throw new Error(`Errore ${result.status}: ${result.statusText}`);
      }

      const data: SpotifyPlaylistSearchResponse = await result.json();
      setPlaylists(data.playlists.items);
    } catch (error) {
      console.error("Errore durante la ricerca delle playlist:", error);
    }
  }, []);

  return {
    playlists,
    searchPlaylists,
  };
};

// hook per recuperare le tracce dalla playlist

export const usePlaylistTracks = () => {
  const [tracks, setTracks] = useState<SpotifyPlaylistTrack[]>([]);

  const retriveTrackFromPlaylist = useCallback(async (playlistId: string) => {
    try {
      const token = await getSpotifyToken();
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data: SpotifyPlaylistTracksResponse = await result.json();
      console.log("tracks data", data);
      setTracks(data.items);
    } catch (error) {
      console.log("errore durante il recupero delle tracce: ", error);
    }
  }, []);
  return { retriveTrackFromPlaylist, tracks };
};

//hook per ricerca brano
export const useSearch = () => {
  const [itemsFound, setItemsFound] = useState<
    Record<SEARCH_TYPE, SpotifyTrackItem[]>
  >({
    track: [],
    album: [],
    artist: [],
    playlist: [],
  });

  const retriveSearchItems = useCallback(
    async (query: string, type: SEARCH_TYPE = "track", limit: number = 20) => {
      try {
        const token = await getSpotifyToken();
        const result = await fetch(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(
            query
          )}&type=${type}&limit=${limit}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data: Record<SEARCH_TYPES, SpotifySearchResponse> = await result.json();
        setItemsFound((prev) => ({
          ...prev,
          [type]: data?.[`${type}s`]?.items,
        }));
      } catch (error) {
        console.log("errore durante la ricerca della traccia", error);
      }
    },
    []
  );
  return { retriveSearchItems, itemsFound };
};
