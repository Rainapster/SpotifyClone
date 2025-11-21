import { useEffect, useMemo } from "react";
import { useMusicCategories } from "../../hooks/useMusic";
import MusicSquareTabs from "../../components/MusicSquareTabs/MusicSquareTabs";

const Home = () => {
  const { retriveMusicGenre, genres } = useMusicCategories();

  useEffect(() => {
    retriveMusicGenre();
  }, [retriveMusicGenre]);

  const mappedMusicItems = useMemo(() => {
    if (genres) {
      return genres.map(({ id, name, icons }) => {
        return { id, name, image: icons[0].url };
      });
    }
  }, [genres]);

  console.log(genres);
  return (
    <>
      <MusicSquareTabs musicItems={mappedMusicItems || []} />
    </>
  );
};
export default Home;
