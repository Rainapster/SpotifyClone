// import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
// import { useSearchTrack } from "../../hooks/useMusic";
import { useState } from "react";

const Navbar = () => {
//   const { retriveSearchTracks, tracks } = useSearchTrack();
  const [searchQuery, setSearchQuery] = useState("")
  const onChangeInput = (event : React.ChangeEvent<HTMLInputElement>) =>{
    const valuerSearched = event.target.value
     console.log("Valore digitato:", valuerSearched)
    setSearchQuery(valuerSearched)
  }
//   useEffect(()=>{
//     if(searchQuery){
//         retriveSearchTracks(searchQuery)
//     }
//     console.log("brani delle ricerca",tracks)
//     console.log("searchquery",searchQuery)
//   },[retriveSearchTracks, searchQuery, tracks])
const navigate = useNavigate();

const handleKeyPress = (event : React.KeyboardEvent<HTMLInputElement>) =>{
    if(event.key === "Enter"){
        navigate(`/search?q=${searchQuery}`)
    }
}
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand navbar-logo"></div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <img
              onClick={() => navigate(`home`)}
              src="/house-regular-full.svg"
              alt="home"
              style={{
                width: "20px",
                height: "20px",
                marginRight: "8px",
                filter: "brightness(0) invert(1)",
              }}
            />
          </li>
        </ul>
        <div
          className="form-inline my-2 my-lg-0"
          style={{ position: "relative" }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="cerca brano"
            aria-label="Search"
            style={{ paddingLeft: "32px" }}
            value={searchQuery}
            onChange={onChangeInput}
            onKeyPress={handleKeyPress}
          />
          <img
            src="/magnifying-glass-solid-full.svg"
            alt="search"
            style={{
              position: "absolute",
              left: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "20px",
              height: "20px",
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
