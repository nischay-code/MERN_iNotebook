import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = () => {
  const [userEmail, setUserEmail] = useState("");

  const location = useLocation();
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  const getUser = async () => {
    const host = "http://localhost:5000";
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({}),
    });
    const json = await response.json();
    setUserEmail(json.email);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : " "
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : " "
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link className="btn btn-primary mx-1" role="button" to="/login">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" role="button" to="/signup">
                Signup
              </Link>
            </form>
          ) : (
            getUser() && (
              <>
                <p className="text-light my-1 mx-1">User : {userEmail}</p>
                <button onClick={handleLogout} className="btn btn-danger mx-1">
                  Logout
                </button>
              </>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
