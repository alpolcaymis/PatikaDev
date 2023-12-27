import { Navigate, Outlet } from "react-router-dom";
import Spinner from "./Spinner";

const PrivateRoute = () => {
  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
