import React from "react";
import { useSpring, animated } from "react-spring";

function CallToAction() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <animated.section style={fadeIn} className="py-5 text-center">
      <div className="container">
        <h2>Ready to experience the future of art galleries?</h2>
        <p>Join us today and revolutionize your gallery's showcase!</p>
        <a
          href="mailto:info@auctios.xyz?subject=Request%20Demo&body=Hello,%0A%0AI'm interested in requesting a demo. Please get back to me with details."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn custom-button">Request Demo</button>
        </a>
      </div>
    </animated.section>
  );
}

export default CallToAction;
