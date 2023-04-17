import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Shivan from "../../Assets/Projects/ShivanMahendrarajah.png";
import lifeline from "../../Assets/Projects/lifeline.png";
import ColdEmailer from "../../Assets/Projects/ColdEmailer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lifeline}
              isBlog={false}
              title="LifeLine"
              description="Upload your course PDF's and get your deadlines!!"
              ghLink="https://github.com/techstartucalgary/lifeline"
              demoLink="https://lifeline.techstartucalgary.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ColdEmailer}
              isBlog={false}
              title="Automatic Cold Emailer"
              description="Program which automates and logs outreach to recruiters and developers to grow your professional network!"
              ghLink="https://github.com/skilledd007/ColdEmailTracker"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shivan}
              isBlog={false}
              title="Shivan Mahendrarajah Personal Website"
              description="Personal Website I made for my Uncle to grow my Web Development skills. React for frontend and Sanity CMS for backend."
              ghLink="https://github.com/skilledd007/shivan_mahendrarajah_personal_website"
              demoLink="https://mahendrarajah.com/"              
            />
          </Col>

          
        </Row>
    </Container>
  );
}

export default Projects;
