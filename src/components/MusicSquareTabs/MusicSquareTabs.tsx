// import { useEffect } from "react";
// import {useMusicCategories} from "../../hooks/useMusic";
import { useLocation, useNavigate } from "react-router-dom";
import MusicCard from "../MusicCard/MusicCard";
import type { MusicSquareTabsProps } from "./MusicSquareTabsmodel";

const MusicSquareTabs = ({musicItems}:MusicSquareTabsProps) => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick =(name: string, id : string)=>{
    if(location.pathname ==="/" || location.pathname === "/home"){
          navigate(`/${name}`)
    }
    else{
       navigate(`/playlist/${id}`);
    }
}
  return (
    <div className="container">
      <div className="row flex-wrap g-3">
        {musicItems?.map(({id, image, name}) => (
          <div className="col-3 mb-3">
            <MusicCard
              onClick={() => handleClick(name, id)}
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
