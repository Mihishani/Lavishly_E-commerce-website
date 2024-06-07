import { NavLink } from "react-router-dom";
import {
  MdContactPhone,
  MdHome,
  MdLocalOffer,
  MdNewLabel,
  MdShop,
} from "react-icons/md";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <MdHome />
          Home
        </div>
      </NavLink>
      <NavLink
        to={"/category"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <MdShop />
          Shop
        </div>
      </NavLink>
      <NavLink
        to={"/offers"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <MdLocalOffer />
          Offers
        </div>
      </NavLink>
      <NavLink
        to={"/latest"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <MdNewLabel />
          Latest
        </div>
      </NavLink>
      <NavLink
        to={"/customerCare"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <MdContactPhone />
          Customer Care
        </div>
      </NavLink>
    </nav>
  );
};
export default Navbar;
