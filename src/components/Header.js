import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="py-3 bg-dark sticky-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 d-flex align-items-center">
            <img
              src={logo}
              width={40}
              alt="Auctios Logo"
              className="ml-3 logo"
            />
          </div>
          <div className="col-10 d-flex justify-content-end align-items-center">
            <nav>
              <a
                href="mailto:info@auctios.xyz?subject=Request%20Demo&body=Hello,%0A%0AI'm interested in requesting a demo. Please get back to me with details."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline-light demo-btn">
                  Request Demo
                </button>
              </a>
              <a href="https://auctios.xyz">
                <button className="btn btn-outline-light login-btn">
                  Login
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
