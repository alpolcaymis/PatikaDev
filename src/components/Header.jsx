import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart-context";
// import { useSelector, useDispatch } from "react-redux";
// import { logout, reset } from "../features/auth/authSlice";

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
        <Link to="/">Support Desk</Link>
      </div>
      <div className="logo">
        <Link to="/admin">Admin Panel</Link>
      </div>
      <div className="logo">
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
