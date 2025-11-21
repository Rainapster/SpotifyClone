// import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand navbar-logo"></div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <img onClick={()=>navigate(`home`)}
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
