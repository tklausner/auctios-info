import React from "react";

function Features() {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div
              className="feature-card p-4 rounded shadow"
              style={{
                border: "3px solid white",
                borderWidth: "3px",
              }}
            >
              <h4>QR Code Integration</h4>
              <p>
                Instantly generate QR codes for individual artworks and artists.
                Scanning offers immediate access to detailed information, artist
                profiles, bidding options, and instant purchases. Elevate
                visitor engagement and provide a seamless digital bridge to the
                art.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="feature-card p-4 rounded shadow"
              style={{
                border: "3px solid white",
                borderWidth: "3px",
              }}
            >
              <h4>Stripe Payment Integration</h4>
              <p>
                Experience utmost security with our Stripe payment gateway.
                Participate in bids with confidence, knowing your card is
                charged only upon winning an auction or confirming a purchase.
                Our priority is your peace of mind.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="feature-card p-4 rounded shadow"
              style={{
                border: "3px solid white",
                borderWidth: "3px",
              }}
            >
              <h4>Gallery Console</h4>
              <p>
                Empower galleries with a sophisticated dashboard to meticulously
                monitor sales, track bids, and update art details in real-time.
                Streamline operations, manage artists, and elevate the
                exhibition experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
