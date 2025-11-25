import { formatDuration } from "../../utils/tracks.utils";
import type { TrackHorizontalCardProps } from "./TrackHorizontalCard.model";

const TrackHorizontalCard = ({ track }: TrackHorizontalCardProps) => {
  const { id, name, album, artists, preview_url, duration_ms } = track;

  return (
    <div key={id} className="row">
      <div className="col-6">
        <div className="d-flex align-items-center py-3">
          <img
            className="me-3"
            src={album.images?.[0]?.url ?? ""}
            alt={name}
            style={{ width: 60, height: 60, borderRadius: "4px" }}
          />
          {artists.map((artist) => (
            <p>{artist.name}</p>
          ))}
        </div>
      </div>
      <div className="col-3 align-items-center py-3">
        <p>{album.name}</p>
        {preview_url && (
          <audio controls style={{ width: "100%" }}>
            <source src={preview_url} type="audio/mpeg"></source>
          </audio>
        )}
        {!preview_url && (
          <small className="text-muted">Anteprima non disponibile</small>
        )}
      </div>
      <div className="col-3 text-center py-3">
        <p>{formatDuration(duration_ms)}</p>
      </div>
    </div>
  );
};
export default TrackHorizontalCard;
