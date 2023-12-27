import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import { useCartContext } from "../context/cart-context";

const Login = () => {
  const { setIsLoggedIn, isLoggedIn } = useCartContext();
  const idField = useRef();
  const passwordField = useRef();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      idField.current.value === "kodluyoruz" &&
      passwordField.current.value === "bootcamp109"
    ) {
      setIsLoggedIn(true);
      toast.success("Successfully LoggedIn");
      navigate("/admin");
    } else {
      toast.error("Invalid credentials");
    }
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login in to get support</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="id"
              className="form-control"
              id="id"
              name="id"
              placeholder="Enter your ID"
              ref={idField}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              ref={passwordField}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
