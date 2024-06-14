import logo from "../assets/images/the (1).png";

const Navbar = () => {
  return (
    <nav
      className={
        "max_padd_container flexBetween bg-white py-2 ring-1 ring-slate-900/5 relative"
      }
    >
      <div>
        <img src={logo} alt={""} />
        <div
          className={
            "uppercase bold-22 text-secondary px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max_xs:px-1"
          }
        >
          ADMIN PANEL
        </div>
      </div>
    </nav>
  );
};
export default Navbar;