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