import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/meetups">React Meetups</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/meetups">All Meetups</NavLink>
          </li>
          <li>
            <NavLink to="/meetups/new">Add Meetup</NavLink>
          </li>
          <li>
            <NavLink to="/meetups/favorites">My Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
