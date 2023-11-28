import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NetflixClone from "../../Assets/Projects/NetflixClone.png";
import ImageGallery from "../../Assets/Projects/ImageGallery.png";

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
              imgPath={NetflixClone}
              isBlog={false}
              title="NetflixClone"
              description="Utilized ReactJS to develop a functional Netflix clone, employing the integration of the
              TMDB API to dynamically present a diverse range of movies and TV shows. Enhanced user
              engagement by enabling seamless playback of trailers from YouTube upon clicking on
              individual posters.
              Developed a responsive and intuitive user interface using ReactJS, HTML, CSS, and
              JavaScript.
              Integrated the TMDB API to fetch and display movies and TV shows, ensuring up-to-date
              content for users."
              ghLink="https://github.com/AdarshNema/Netflix-clone"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ImageGallery}
              isBlog={false}
              title="ImageGallery"
              description=" Designed and developed an image searching website featuring seamless integration of
              the Unsplash API
              Created a user-friendly interface to display searched images along with essential details
              photographer names and dates.
              Demonstrated effective API utilization and attention to detail in presenting comprehensive
              image information.
              Technology: HTML,CSS,JS,ReactJS,NodeJS"
              ghLink="https://github.com/AdarshNema/Image-gallery"
              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
