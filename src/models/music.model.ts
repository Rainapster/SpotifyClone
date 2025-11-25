export interface SpotifyCategoriesResponse {
  categories: {
    items: MusicCategory[]; // Array di categorie musicali
    total: number
  };
}

export interface MusicCategory {
  id: string; // Identificativo unico della categoria
  name: string; // Nome della categoria
  icons: Icon[]; // Array di immagini associate alla categoria
}

export interface MusicTabProps {
  id: string; 
  name: string; // Nome item
  image: string; // Immagine
}

export interface Icon {
  url: string; // URL dell'immagine
}

export interface SpotifyPlaylistSearchResponse {
  playlists: {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: SpotifyPlaylist[];
  };
}

export interface SpotifyPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyUser;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export interface SpotifyImage {
  url: string;
  height: number | null;
  width: number | null;
}

export interface SpotifyUser {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string | null;
}
//da qui iniziano le interfacce per le tracce
// Interfaccia per un singolo artista
export interface SpotifyArtist {
  id: string;
  name: string;
  type: string;
  uri: string;
  href: string;
}

// Interfaccia per l'album
export interface SpotifyAlbum {
  id: string;
  name: string;
  images: Icon[];
  release_date: string;
  total_tracks: number;
  type: string;
}

// Interfaccia per una singola traccia
export interface SpotifyTrackItem {
  id: string;
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  duration_ms: number;
  explicit: boolean;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
}

// Interfaccia per l'item della playlist (contiene la traccia e metadati)
export interface SpotifyPlaylistTrack {
  added_at: string;
  added_by: {
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  primary_color: string | null;
  track: SpotifyTrackItem;
  video_thumbnail: {
    url: string | null;
  };
}

// Interfaccia per la risposta completa delle tracce di una playlist
export interface SpotifyPlaylistTracksResponse {
  href: string;
  items: SpotifyPlaylistTrack[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface SpotifySearchResponse {
    href: string;
    items: SpotifyTrackItem[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };

// Interfaccia per fare la ricerca di un brano
export interface SpotifyTrackSearchResponse {
  tracks: SpotifySearchResponse
}

export type SEARCH_TYPE = "track" | "album" | "artist" | "playlist";
export type SEARCH_TYPES = "tracks" | "albums" | "artists" | "playlists"