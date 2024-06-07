import { Link } from "react-router-dom";
import logo from "../assets/images/the (1).png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div>
        {/*logo*/}
        <div>
          <Link>
            <img src={logo} alt={""} height={150} width={150} />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
