import { Link } from "react-router-dom";
import logo from "../assets/images/the (1).png";
import Navbar from "./Navbar";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  return (
    <header
      className={
        "fixed top-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10"
      }
    >
      <div className={"px-4 flexBetween py-3 max-xs:px-2"}>
        {/*logo*/}
        <div>
          <Link>
            <img src={logo} alt={""} height={150} width={150} />
          </Link>
        </div>

        {/*Nav bar Desktop*/}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />

        {/*Nav bar Mobile*/}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />
        {/*Button*/}
        <div>
          {!menuOpened ? (
            <MdMenu
              className={
                "md:hidden cursor-pointer hover:text-secondary mr-2 p-1 h-8 w-8 "
              }
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className={
                "md:hidden cursor-pointer hover:text-secondary mr-2 ring-1 p-1 h-8 w-8 rounded-full "
              }
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
