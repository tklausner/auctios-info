import React from "react";
import { useSpring, animated } from "react-spring";
import { Parallax } from "react-parallax";
import logo from "../images/logo.svg";
import bgImage from "../images/gallery_background.png"; // Adjust the path to your image

function HeroSection() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });

  return (
    <Parallax bgImage={bgImage} strength={500}>
      <section
        className="hero-section py-5"
        style={{
          height: "50vh",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.9))",
        }}
      >
        <animated.div style={fadeIn} className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "2em 0",
            }}
          >
            <img src={logo} width={75} alt="Auctios Logo" />
            <h1
              style={{
                fontSize: "5em",
                fontFamily: "'Gill Sans', sans-serif",
                marginLeft: "-5px",
                color: "#000",
                fontWeight: 700,
              }}
            >
              uctios
            </h1>
          </div>
          <p
            style={{
              textAlign: "center",
              color: "#333",
              fontSize: "1.3em",
              margin: "1em 0",
            }}
          >
            Experience the future of art auctions. Where beauty meets seamless
            bidding.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="mailto:info@auctios.xyz?subject=Request%20Demo&body=Hello,%0A%0AI'm interested in requesting a demo. Please get back to me with details."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="btn btn-large custom-button"
                style={{ fontSize: "1.1em", padding: "0.7em 2em" }}
              >
                Request Demo
              </button>
            </a>
          </div>
        </animated.div>
      </section>
    </Parallax>
  );
}

export default HeroSection;
