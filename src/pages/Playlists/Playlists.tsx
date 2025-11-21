import { useEffect, useMemo } from "react";
import {
  useSearchPlaylistsByGenre,
} from "../../hooks/useMusic";
import MusicSquareTabs from "../../components/MusicSquareTabs/MusicSquareTabs";
import { useParams } from "react-router-dom";

const Playlists = () => {
    const { playlistName } = useParams<{ playlistName?: string }>();
    const genreName = playlistName;
    const { searchPlaylists, playlists } = useSearchPlaylistsByGenre();

  useEffect(() => {
    searchPlaylists(genreName ?? "");
  }, [genreName, searchPlaylists]);

  const mappedMusicItems = useMemo(() => {
    console.log('playlists', playlists);
    if(playlists?.length){
        return playlists.filter(Boolean).map(({id, name, images}) => {
            return {id, name, image: images[0].url}
        })
    } return [];
  },[playlists])

  return (
    <>
      <MusicSquareTabs musicItems={mappedMusicItems || []} />
    </>
  );
};
export default Playlists;
