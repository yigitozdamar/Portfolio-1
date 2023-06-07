import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cryptoapp from "../../Assets/Projects/cryptoapp.png";
import todolistimage from "../../Assets/Projects/todolistimage.png";
import traveladvisor from "../../Assets/Projects/traveladvisor.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";
import blogwebsite from "../../Assets/Projects/blogwebsite.png";
import amazonClone from "../../Assets/Projects/amazonClone.png";
import spotifyClone from "../../Assets/Projects/spotifyClone.png";
import mediumClone from "../../Assets/Projects/mediumClone.png";
import varmi from "../../Assets/Projects/varmi.png";
import flickez from "../../Assets/Projects/flickez.png";
import expo from "../../Assets/Projects/expo.png";
import holidayFriend from "../../Assets/Projects/HolidayFriend.png";
import swiftRadio from "../../Assets/Projects/SwiftRadio.png";
import quizapp from "../../Assets/Projects/quizupimage.jpeg";
import ecommerce from "../../Assets/Projects/ecommerce.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce App with admin panel"
              description="I developed this app with Next.JS, MongoDB, Styled Components, TailwindCSS, NextAuth.js and Stripe Payment System"
              link="https://github.com/yigitozdamar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizapp}
              isBlog={false}
              title="QuizUp Battle App"
              description="I used swift 5, UIKit, Firebase Auth, Firebase Cloudstore, Firebase Storage with StoryBoard.You can download on applestore."
              link="https://apps.apple.com/vg/app/quizup-battle-trivia/id6446598510"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={holidayFriend}
              isBlog={false}
              title="HolidayFriend App"
              description="I used swift 5, UIKit, Firebase Auth, Firebase Cloudstore, Firebase Storage, Google Sign-in, MessageKit, Snapkit for Holiday Friend App. No storyboard, developed programmatically."
              link="https://github.com/yigitozdamar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiftRadio}
              isBlog={false}
              title="Swift Radio App"
              description="Swift 5, UIKit. I coded programmatically with no storyboard."
              link="https://github.com/yigitozdamar/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={varmi}
              isBlog={false}
              title="VARMI Web App"
              description="VARMI is a web app that allows you to search for services you need. I used React, Nextjs, Tailwind, Firebase and TypeScript, Prisma to build this app. And deployed it on AWS EC2."
              link="https://www.varmi.com.tr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flickez}
              isBlog={false}
              title="FLICKEZ Web App"
              description="Flickez is an e-sport web app. I used NextJs, TailwindCSS, SWR and Typescript to build it. AWS S3 is used for storing images."
              link="https://flickez.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expo}
              isBlog={false}
              title="EXPO Virtual Exhibition Web App"
              description="I developed this web app to showcase my work in the Expo Virtual Exhibition. I used ReactJs,Bootstrap,BabylonJs,Context API,PostgreSQL."
              link="https://www.vexpo.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mediumClone}
              isBlog={false}
              title="Medium Clone"
              description="Medium clone built with ReactJs,TailwindCSS,Sanity and NextJs. I used Typescript to code it."
              link="https://github.com/yigitozdamar/medium-clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifyClone}
              isBlog={false}
              title="Spotify Clone"
              description="Spotify clone built with ReactJs,TailwindCSS and NextJs with authentation."
              link="https://github.com/yigitozdamar/spotify-clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonClone}
              isBlog={false}
              title="Amazon Clone"
              description="Amazon clone built with ReactJs, Firebase,Material UI, and stripe payment gateway."
              link="https://github.com/yigitozdamar/amazon-clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoapp}
              isBlog={false}
              title="Crypto App"
              description="A cryptocurrency tracker app built with React and Redux. RapidApi is used to fetch data from the crypto api."
              link="https://github.com/yigitozdamar/crypto-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolistimage}
              isBlog={false}
              title="To Do List"
              description="A to do list app built with React.I used Ejs templates,mongoose DB, express.js and lodash. It is a simple todo list app that can be used to create a todo list."
              link="https://github.com/yigitozdamar/todolist-v1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traveladvisor}
              isBlog={false}
              title="Travel Advisor"
              description="A travel advisor app built with React and Material UI.I used rapid api, open weather map api and google maps api. It is a travel advisor app that can be used to find the best places to visit."
              link="https://github.com/yigitozdamar/travel-advisor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather Forecast App"
              description="A weather app built with React. It is a weather app that can be used to find the weather of any city."
              link="https://github.com/yigitozdamar/weather-forecast"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogwebsite}
              isBlog={false}
              title="Blog Website"
              description="A blog website built with React,bodyParser,EJS templates,Express.js,lodash and mongoDB(mongoose). It is a blog website that can be used to create a blog."
              link="https://github.com/yigitozdamar/Blog-Website"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
