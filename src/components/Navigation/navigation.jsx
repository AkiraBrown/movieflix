import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as MovieLogo } from "../../assets/movie.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <MovieLogo
            className="logo"
            style={{ width: "50px", height: "50px" }}
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
