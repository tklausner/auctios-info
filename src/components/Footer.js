import React from "react";

function Footer() {
  return (
    <footer className="py-3 bg-dark text-white">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center mx-0">
          <div className="col-md-6" style={{ paddingLeft: "15px" }}>
            <p className="mb-0">© 2023 Auctios. All rights reserved.</p>
          </div>
          <div
            className="col-md-6 d-flex justify-content-end"
            style={{ paddingRight: "15px" }}
          >
            <a href="#" className="text-white mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-white mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
