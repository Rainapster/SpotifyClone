import { useEffect } from "react";
import {useMusicCategories} from "../../hooks/useMusic";
import MusicCard from "../MusicCard/MusicCard";

const MusicCardCarosel = () => {
  const { retriveMusicGenre, genres } = useMusicCategories();
  useEffect(() => {
    retriveMusicGenre();
  }, [retriveMusicGenre]);
  console.log(genres);

  return (
    <div className="container">
      <div className="row flex-wrap g-3">
        {genres?.map((genre, index) => (
          <div className="col-3 mb-3">
            <MusicCard
              name={genre.name}
              iconsSrc={genre.icons[0].url}
              key={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MusicCardCarosel;
