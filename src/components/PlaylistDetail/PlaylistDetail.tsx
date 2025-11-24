import { useParams } from "react-router-dom";
import { usePlaylistTracks } from "../../hooks/useMusic";
import { useEffect } from "react";
import "./PlaylistDetail.css";
const PlaylistDetail = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const { tracks, retriveTrackFromPlaylist } = usePlaylistTracks();

  const formatDuration = (durationMs: number) => {
    const minutes = Math.floor(durationMs / 60000); // Converte ms in minuti
    const seconds = Math.floor((durationMs % 60000) / 1000); // Resto in secondi
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  useEffect(() => {
    if (playlistId) {
      retriveTrackFromPlaylist(playlistId);
    }
  }, [playlistId, retriveTrackFromPlaylist]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <p className="mb-0 fw-bold">Titolo</p>
        </div>
        <div className="col-3">
          <p className="mb-0 fw-bold">Album</p>
        </div>
        <div className="col-3 text-center">
          <img
            src="/clock-regular-full.svg"
            style={{ width: 20, height: 20, filter: "invert(1)" }}
            alt="Duration"
          />
        </div>
      </div>
      {tracks.map((track, index) => {
        const imageUrl = track.track.album.images?.[0]?.url ?? "";
        return (
          <div key={index} className="row">
            <div className="col-6">
              <div className="d-flex align-items-center py-3">
                <img
                  className="me-3"
                  src={imageUrl}
                  alt={track.track.name}
                  style={{ width: 60, height: 60, borderRadius: "4px" }}
                />
                {track.track.artists.map((artist) => (
                  <p>{artist.name}</p>
                ))}
              </div>
            </div>
            <div className="col-3 align-items-center py-3">
              <p>{track.track.album.name}</p>
                {track.track.preview_url &&(<audio controls style={{width:"100%"}}>
                    <source src={track.track.preview_url} type="audio/mpeg"></source>
                </audio>)}
                              {!track.track.preview_url && (
                <small className="text-muted">Anteprima non disponibile</small>
              )}
            </div>
            <div className="col-3 text-center py-3">
              <p>{formatDuration(track.track.duration_ms)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PlaylistDetail;
