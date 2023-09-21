import React from "react";
import art_dark from "../images/art_dark.jpeg";
import timer_dark from "../images/timer_dark.gif";
import qr_dark from "../images/qr_dark.jpeg";

function GalleryDark() {
  return (
    <section className="py-5 bg-dark ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4">
            <div className="image-container bg-white p-2 border rounded shadow-sm">
              <img
                src={art_dark}
                alt="Demo GIF 1"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="image-container bg-white p-2 border rounded shadow-sm">
              <img
                src={timer_dark}
                alt="Demo GIF 2"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="image-container bg-white p-2 border rounded shadow-sm">
              <img
                src={qr_dark}
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

export default GalleryDark;
