import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            As a developer, my path was not always crystal clear. Doing my undergrad at the Schulich School of Engineering at the University of Calgary afforded me the opportunity to explore many different
            disciplines in engineering, as we all have a common first year. Therefore, I was able to explore concepts in Electrical Engineering, Software Engineering, Mechanical Engineering and Chemical Engineering. 
            I had always been interested in electronics, as I enjoyed following the latest in consumer electronics especially in my teenage years. Naturally then, I chose electrical engineering with a 
            minor in Computer Engineering, as it has allowed me the opportunity to work with Hardware and Software. Between my second and third year, I had the opportunity to work with both Hardware and Software. While 
            Working with the Hardware was a valuable learning experience, it was the Software that I naturally felt more drawn to, and I saw myself more as a Software Developer than an Electrical Engineer. I am passionate about 
            using Software to build a better and more equitable world!
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
