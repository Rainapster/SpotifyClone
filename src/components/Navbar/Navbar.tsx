// import { NavLink } from "react-router-dom"
import { useEffect } from "react";
import { useSearchPlaylistsByGenre } from "../../hooks/useMusic";
import "./Navbar.scss";

const Navbar = () => {
  const { playlists, searchPlaylists} =useSearchPlaylistsByGenre("Rock");
  useEffect(() => {
    searchPlaylists();
    console.log("playlist",playlists)
  }, [searchPlaylists]);

  useEffect(() => {
    console.log("playlist", playlists);
    
    if (playlists) {
      console.log("Playlists trovate:", playlists.playlists.items.length);
      console.log("Dettagli prima playlist:", playlists.playlists.items[0]);
    }
  }, [playlists]); 


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand navbar-logo"></div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <img
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
        <form
          className="form-inline my-2 my-lg-0"
          style={{ position: "relative" }}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ paddingLeft: "32px" }}
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
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
