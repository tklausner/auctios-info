import React from "react";
import { useSpring, animated } from "react-spring";
import logo from "../images/logo.svg";

function HeroSection() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

  return (
    <section
      className="hero-section py-5"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="container">
        <animated.div style={fadeIn}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "2em 0",
            }}
          >
            <img src={logo} width={75} alt={"Auctios Logo"} />
            <h1
              style={{
                fontSize: "5em",
                fontFamily: "Gill Sans",
                marginLeft: -5,
                color: "#000",
                fontWeight: 700,
              }}
            >
              uctios
            </h1>
          </div>
          <p style={{ textAlign: "center", color: "#444" }}>
            Experience the future of art auctions. Where beauty meets seamless
            bidding.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="mailto:info@auctios.xyz?subject=Request%20Demo&body=Hello,%0A%0AI'm interested in requesting a demo. Please get back to me with details."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-large custom-button">
                Request Demo
              </button>
            </a>
          </div>
        </animated.div>
      </div>
    </section>
  );
}

export default HeroSection;
