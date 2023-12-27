import { Navigate, Outlet } from "react-router-dom";
import Spinner from "./Spinner";
import { useCartContext } from "../context/cart-context";
import { toast } from "react-toastify";

const PrivateRoute = () => {
  const { isLoggedIn } = useCartContext();

  if (!isLoggedIn) {
    toast.warning("Unauthorized access, please login first");
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
