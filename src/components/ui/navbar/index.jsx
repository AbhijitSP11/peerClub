import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ServiceContext } from "../../../Services";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const authContext = useContext(ServiceContext);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const clickHandler = () => {
    setMenu(false);
  };
  return (
    <>
      <div className={styles.container}>
        <h3
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="../../../../public/static/ppc.png" alt="" height={50} />
        </h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Courses</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>

          {authContext.auth === null ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/learning">My Learning</Link>
              </li>
              
              <li
                onClick={() => {
                  authContext.setAuth(null);
                }}
              >
                Sign out
              </li>
              <li style={{color:"#33bd63", textTransform: "capitalize"}}>
              Hii, 
                {authContext.auth.user.name}
              </li>
            </>
          )}
        </ul>
      </div>

      <div className={styles.phonecontainer}>
        <h3
          onClick={() => {
            navigate("/");
          }}
        >
          Canada<span>Gateway</span>
        </h3>
        <ul
          style={{
            top: menu ? "0vh" : "-100vh",
          }}
        >
          <li onClick={clickHandler}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={clickHandler}>
            <Link to="/services">Courses</Link>
          </li>
          <li onClick={clickHandler}>
            <Link to="/community">Community</Link>
          </li>
          <li onClick={clickHandler}>
            <Link to="/contact">My Learning</Link>
          </li>
          <BiX className="icon" onClick={toggleMenu} />
        </ul>
        <BiMenuAltRight onClick={toggleMenu} />
      </div>
    </>
  );
};

export default Navbar;
