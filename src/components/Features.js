import React from "react";
import QrCodeIcon from "../images/QRCodeIcon.svg";
import StripeIcon from "../images/StripeIcon.svg";
import GalleryIcon from "../images/GalleryIcon.svg";

function Features() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          {[
            {
              title: "QR  Integration",
              desc: "Generate QR codes for artworks and artists. Scan for details, profiles, bids, and purchases. Seamlessly link art and technology.",
              icon: QrCodeIcon,
            },
            {
              title: "Stripe Payment",
              desc: "Utilize secure payments with Stripe. Bid confidently, and pay only upon auction wins or purchases. Trust in safe transactions",
              icon: StripeIcon,
            },
            {
              title: "Gallery Console",
              desc: "Revolutionize galleries with our dashboard. Monitor sales, track bids, and update art in real-time. Efficiency in art management.",
              icon: GalleryIcon,
            },
          ].map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="feature-card p-4 rounded shadow"
                style={{
                  border: "3px solid white",
                  transition: "transform 0.3s, max-height 0.3s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  const desc =
                    e.currentTarget.getElementsByClassName("feature-desc")[0];
                  if (desc) {
                    desc.style.display = "block";
                    setTimeout(() => (desc.style.opacity = "1"), 10);
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  const desc =
                    e.currentTarget.getElementsByClassName("feature-desc")[0];
                  if (desc) {
                    desc.style.opacity = "0";
                    setTimeout(() => (desc.style.display = "none"), 300);
                  }
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    style={{
                      width: "50px",
                      marginBottom: "15px",
                      filter: "invert(1)",
                      padding: 0,
                      marginRight: 0,
                      marginLeft: 0,
                    }}
                  />
                  <h4 style={{ textAlign: "center" }}>{feature.title}</h4>
                </div>
                <p
                  className="feature-desc"
                  style={{
                    display: "none",
                    opacity: "0",
                    transition: "visibility 0.3s, opacity 0.3s",
                    width: "100%",
                    textAlign: "center",
                    padding: "1rem 1rem",
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @media (max-width: 767px) {
            .feature-desc {
              opacity: 1 !important;  
              display: block !important; 
            }
          }
        `}
      </style>
    </section>
  );
}

export default Features;
