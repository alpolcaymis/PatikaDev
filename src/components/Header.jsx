import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart-context";

import patikalogo from "../assets/svg/patika-logo.svg";

const Header = () => {
  const { setIsLoggedIn, isLoggedIn } = useCartContext();

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    // dispatch(logout());
    // dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={patikalogo} alt="patika-logo" style={{ width: "14rem" }} />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/admin">
            <FaUser />
            <p className="truncate ">Admin Panel</p>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/ticket-search">Search Ticket</Link>
      </div>
      <ul>
        {isLoggedIn ? (
          <li
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
