import { useCallback, useState } from "react";
import getSpotifyToken from "../utils/spotifyAuth";
import {
  type MusicCategory,
  type SpotifyCategoriesResponse,
  type SpotifyPlaylistSearchResponse,
} from "../models/music.model";

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

export const useSearchPlaylistsByGenre = (genre: string) => {
  const [playlists, setPlaylists] =
    useState<SpotifyPlaylistSearchResponse | null>(null);

  const searchPlaylists = useCallback(async () => {
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
      setPlaylists(data);
    } catch (error) {
      console.error("Errore durante la ricerca delle playlist:", error);
    }
  }, [genre]);

  return {
    playlists,
    searchPlaylists,
  };
};
