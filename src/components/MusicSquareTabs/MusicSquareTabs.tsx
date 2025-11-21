// import { useEffect } from "react";
// import {useMusicCategories} from "../../hooks/useMusic";
import MusicCard from "../MusicCard/MusicCard";
import type { MusicSquareTabsProps } from "./MusicSquareTabsmodel";

const MusicSquareTabs = ({musicItems}:MusicSquareTabsProps) => {
//   const { retriveMusicGenre, genres } = useMusicCategories();
//   useEffect(() => {
//     retriveMusicGenre();
//   }, [retriveMusicGenre]);
//   console.log(genres);

  return (
    <div className="container">
      <div className="row flex-wrap g-3">
        {musicItems?.map(({id, image, name}) => (
          <div className="col-3 mb-3">
            <MusicCard
              name={name}
              iconsSrc={image}
              key={id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MusicSquareTabs;
