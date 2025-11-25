import { useEffect } from "react";
import { useSearch } from "../../hooks/useMusic";
import { useSearchParams } from "react-router-dom";
import TrackHorizontalCard from "../../components/TrackHorizontalCard/TrackHorizontalCard";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const { retriveSearchItems, itemsFound } = useSearch();

  useEffect(() => {
    if (!searchQuery) return;
    retriveSearchItems(searchQuery, "track", 4);
    retriveSearchItems(searchQuery, "album", 5);
  }, [retriveSearchItems, searchQuery]);

  console.log("TROVATI tracce + album", searchQuery, itemsFound);
  return (
    <div className="container-fluid">
      <h2>Risultati per: "{searchQuery}"</h2>

      {/* Header della tabella */}
      <div className="row">
        <div className="col-6">
          <p className="mb-0 fw-bold">Titolo</p>
        </div>
        <div className="col-3">
          <p className="mb-0 fw-bold">Album</p>
        </div>
        <div className="col-3 text-center">
          <p className="mb-0 fw-bold">Durata</p>
        </div>
      </div>
        <p>Track</p>
      {/* Mostra le tracce trovate */}
      {itemsFound.track.length > 0 ? (
        itemsFound.track.map((singleTrack) => (
          <TrackHorizontalCard key={singleTrack.id} track={singleTrack} />
        ))
      ) : (
        <p>Nessuna traccia trovata per "{searchQuery}"</p>
      )}
        <p>Album</p>
           {/* Mostra le tracce trovate */}
      {itemsFound.album.length > 0 ? (
        itemsFound.track.map((singleAlbum) => (
          <TrackHorizontalCard key={singleAlbum.id} track={singleAlbum} />
        ))
      ) : (
        <p>Nessuna traccia trovata per "{searchQuery}"</p>
      )}


    </div>
  );
};

export default SearchPage;
