import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWorkOutline } from "react-icons/md";

const WorkingHistory = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1>Working Life</h1>
        <p>
          <br />
        </p>
        <Row className="row justify-content-center">
          <Col className="text-center">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="May 2022 - Present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<MdOutlineWorkOutline />}
              >
                <h3 className="vertical-timeline-element-title">
                  CTO - Software Engineer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">VARMI</h4>
                <p>
                  ● Leadership role on the project and performing the associated
                  duties and functions vital to its completion. <br />● I assist
                  my company to increase subscribers from 7K to 100K+ <br />
                  ● Build all the mobile and web apps (iOS-Android-Web-CMS) from
                  zero in 3-4 months <br />● STACKS: Javascript, TypeScript,
                  React, Next.js, Node.js, Prisma, React Native, PostgreSQL,
                  AWS, Jira, Trello, Figma, Git, Github, Iyzico Payment Service,
                  iOS UIKit, XCode, Swift, Scrum
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="September 2022 - Present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                icon={<MdOutlineWorkOutline />}
              >
                <h3 className="vertical-timeline-element-title">
                  iOS Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">THINGS</h4>
                <p>
                  ● Contributed to the AYGAZ iOS Mobile App development. <br />{" "}
                  ● Reactive programming (RxSwift) <br />
                  ● Integrated analytics, fuel consumption pages API, and many
                  stuff. <br />● STACKS: Swift, UIKit, RxSwift, RxCocoa,
                  CocoaDebug, Firebase, Alamofire, MVVM, CoreLocation, Google
                  API, Analytics, ClickUp
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="October 2021 - May 2022"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                icon={<MdOutlineWorkOutline />}
              >
                <h3 className="vertical-timeline-element-title">
                  WebGL Frontend Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">VEXPO</h4>
                <p>
                  ● Assisted web presence planning, implementing changes, and
                  integrating requested elements to streamline business
                  operations. <br />
                  ● I developed a virtual fair scene and its components from
                  scratch with React and 3D WebGL Babylon frameworks <br />●
                  STACKS: React, Next.Js, Babylon.js, Node.Js, PostgreSQL,
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="August 2009 - August 2019"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<MdOutlineWorkOutline />}
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  Military Officer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  TURKISH ARMED FORCES
                </h4>
                <p>
                  ● T-129 ATAK Helicopter Pilot
                  <br />● Bell AB-205 & Uh-1 Helicopters Maintenance Pilot{" "}
                  <br />● Cessna T-182T Airplane Pilot <br />● The New Turkish
                  Helicopter Project T-129 ATAK's System Developments and
                  Project Management in the TAI(Turkish Aerospace Industry){" "}
                  <br />● Commando Team Leader
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<MdOutlineWorkOutline />}
              />
            </VerticalTimeline>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WorkingHistory;
