import { NavLink } from "react-router-dom";
import {
  MdContactPhone,
  MdContacts,
  MdContactSupport,
  MdHelp,
  MdHome,
  MdLocalOffer,
  MdNewLabel,
  MdOpenInNew,
  MdOutlineChildCare,
  MdOutlineContactPhone,
  MdShop,
} from "react-icons/md";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink to={"/"}>
        <div className={"flexCenter gap-x-1"}>
          <MdHome />
          Home
        </div>
      </NavLink>
      <NavLink to={"/category"}>
        <div className={"flexCenter gap-x-1"}>
          <MdShop />
          Shop
        </div>
      </NavLink>
      <NavLink to={"/offers"}>
        <div className={"flexCenter gap-x-1"}>
          <MdLocalOffer />
          Offers
        </div>
      </NavLink>
      <NavLink to={"/latest"}>
        <div className={"flexCenter gap-x-1"}>
          <MdNewLabel />
          Latest
        </div>
      </NavLink>
      <NavLink to={"/customerCare"}>
        <div className={"flexCenter gap-x-1"}>
          <MdContactPhone />
          Customer Care
        </div>
      </NavLink>
    </nav>
  );
};
export default Navbar;
