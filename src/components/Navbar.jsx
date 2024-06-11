import { NavLink } from "react-router-dom";
import {
  MdBrush,
  MdContactPhone,
  MdEarbuds,
  MdFace,
  MdFace2,
  MdFace3,
  MdFace5,
  MdFace6,
  MdHome,
  MdLocalOffer,
  MdNewLabel,
  MdRingVolume,
  MdShop,
  MdShoppingBag,
} from "react-icons/md";
import { FaShoePrints } from "react-icons/fa";

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
      {/* <NavLink
        to={"/shop"}
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
      </NavLink>*/}

      <NavLink
        to={"/skin"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <MdFace />
          Skin Care
        </div>
      </NavLink>
      <NavLink
        to={"/hair"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <MdFace2 />
          Hair Care
        </div>
      </NavLink>

      <NavLink
        to={"/makeup"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <MdBrush />
          Beauty Care
        </div>
      </NavLink>

      <NavLink
        to={"/bags"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <MdShoppingBag />
          Bags/parse
        </div>
      </NavLink>

      <NavLink
        to={"/earring"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <MdEarbuds />
          Earrings
        </div>
      </NavLink>

      <NavLink
        to={"/shoes"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <FaShoePrints />
          Heels/Shoes
        </div>
      </NavLink>

      {/*<NavLink
        to={"/customerCare"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className={"flexCenter gap-x-1"}>
          <MdContactPhone />
          Customer Care
        </div>
      </NavLink>*/}
    </nav>
  );
};
export default Navbar;
