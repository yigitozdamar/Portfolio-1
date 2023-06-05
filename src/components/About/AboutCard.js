import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yigit Ozdamar </span>
            from <span className="purple"> Fethiye, Turkey</span>
            <br />I am a system engineer and full stack developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Doing extreme sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Canoeing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading every kind of stuff
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to learn new things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yigit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
