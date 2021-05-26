import React from "react";
//import use context from react needs to be added later -----> Don't Delete!
import { Link } from "react-router-dom";
//import { UserContext } from "../contexts/UserContext"; -----> Don't Delete!
import styles from "../css/Navbar.module.css";


const Navbar = () => {
  //const {  } = useContext(UserContext); // Don't elete!logout and logged in  needs to be added later on.

  return (
    <div>
      <nav
        className={`${styles.navbar} navbar navbar-expand-lg navbar-light bg-light`}
      >
        <Link to="/">
          <img
            className={styles.logo}
            //src="../assets/whitepopcorn.svg" //the white logo mostly white
            //src="../assets/popcorn.svg" // the black one
            src="https://pic.onlinewebfonts.com/svg/img_63417.png"
            width="20"
            height="30"
            alt="popcorn"
            
          />
        </Link>
     
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> 
          <div className="nav-item nav-link w-100">
            <Link className={styles.link} to="/allmovies">
             All movies
            </Link>
            <Link className={styles.link} to="/about">
                  About
                </Link>
                <Link className={styles.link} to="/profile">
                 Profile
                </Link> 
                
           {/*loggedIn ? (
              <React.Fragment>
              
                <Link
                  onClick={logOut}
                  className={`${styles.link} float-end`}
                  to="/"
                >
                  Log out
                </Link>
              </React.Fragment>
            ) : ( */ //---------------> Don't delete! needs to be added later on. 

              <Link to="/login" className={`${styles.link} float-end`}>
                Log in
              </Link>
            //  ) // Don't delete! we are going to comment out this section later on.
          }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;