import { useParams } from "react-router-dom";
import { usePlaylistTracks } from "../../hooks/useMusic";
import { useEffect } from "react";
import "./PlaylistDetail.css";
import TrackHorizontalCard from "../TrackHorizontalCard/TrackHorizontalCard";

const PlaylistDetail = () => {
  const { playlistId } = useParams<{ playlistId: string }>();
  const { tracks, retriveTrackFromPlaylist } = usePlaylistTracks();


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
      {tracks.map(({track}) => <TrackHorizontalCard track={track}/>)}
    </div>
  );
};
export default PlaylistDetail;
