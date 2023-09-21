import React from "react";
import art from "../images/art.jpeg";
import timer from "../images/timer.gif";
import qr from "../images/qr.jpeg";

function GalleryLight() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4">
            <div className="image-container bg-white p-2 border rounded shadow-sm">
              <img
                src={art}
                alt="Demo GIF 1"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="image-container bg-white p-2 border rounded shadow-sm">
              <img
                src={timer}
                alt="Demo GIF 2"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="image-container bg-white p-2 border rounded shadow-sm">
              <img
                src={qr}
                alt="Demo GIF 3"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryLight;
