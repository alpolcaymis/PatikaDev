import { Navigate, Outlet } from "react-router-dom";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  if (false) {
    return <Spinner />;
  }

  return true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
