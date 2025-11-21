// import { useEffect } from "react";
// import {useMusicCategories} from "../../hooks/useMusic";
import { useNavigate } from "react-router-dom";
import MusicCard from "../MusicCard/MusicCard";
import type { MusicSquareTabsProps } from "./MusicSquareTabsmodel";

const MusicSquareTabs = ({musicItems}:MusicSquareTabsProps) => {
//   const { retriveMusicGenre, genres } = useMusicCategories();
//   useEffect(() => {
//     retriveMusicGenre();
//   }, [retriveMusicGenre]);
//   console.log(genres);
 const navigate = useNavigate();
const handleClick =(name: string)=>{
  navigate(`/${name}`)
}

  return (
    <div className="container">
      <div className="row flex-wrap g-3">
        {musicItems?.map(({id, image, name}) => (
          <div className="col-3 mb-3">
            <MusicCard
              onClick={() => handleClick(name)}
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
