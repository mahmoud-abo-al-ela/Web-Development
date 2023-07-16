import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/Navbar";
import { FaUserCircle, FaCaretDown, FaAlignLeft } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import { useState } from "react";
const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const { toggleSidebar, logoutUser, user } = useAppContext();
  return (
    <Wrapper>
      <nav className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setDropdown(!dropdown)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={dropdown ? "dropdown show-dropdown" : "dropdown"}>
            <button type="button" className="dropdown-btn" onClick={logoutUser}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
export default NavBar;
