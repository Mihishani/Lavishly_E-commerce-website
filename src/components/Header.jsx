import { Link } from "react-router-dom";
import logo from "../assets/images/the (1).png";
import Navbar from "./Navbar";

const Header = () => {
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
        <Navbar />
        {/*Button*/}
        <div>button</div>
      </div>
    </header>
  );
};
export default Header;
