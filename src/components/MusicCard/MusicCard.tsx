import "./MusciCard.css";
import type { MusicCardWithProps } from "./MusicaCard.model";
const MusicCard = ({ name, iconsSrc }: MusicCardWithProps) => {
  return (
    <div className="container-card">
      <div
        className="backroundImg"
        style={{ backgroundImage: `url(${iconsSrc})` }}
      >
        <h6 className="title-genre">{name}</h6>
      </div>
    </div>
  );
};
export default MusicCard;
