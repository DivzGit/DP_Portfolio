import React from "react";
import { Typography, Row, Col ,Progress} from "antd";
import { FaUser, FaEnvelope,FaDownload } from "react-icons/fa";

import "./About.css";

const skills = [
  { name: "HTML", proficiency: 90 },
  { name: "CSS", proficiency: 85 },
  { name: "React", proficiency: 80 },
  { name: "Spring Boot", proficiency: 75 },
  { name: "MongoDB", proficiency: 70 },
  { name: "HTML", proficiency: 90 },
  { name: "CSS", proficiency: 85 },
  { name: "React", proficiency: 80 }
];

const About = () => {
  return (
    <section id="about" className="about-section section_row" style={{height:"auto"}}>
      <div class="center-container">
        <div class="text-container">
          <span class="background-text">RESUME</span>
          <span class="foreground-text">
            ABOUT <span class="highlight">ME</span>
          </span>
        </div>
      </div>
      <Row gutter={16} justify="center" align="middle" className="mt-5">
        <Col xs={24} md={12} className="">
          <p className="resume-title  c_07d2de">PERSONAL INFOS</p>
          <div>
            <div className="d-flex align-items-center">
              <FaUser size={20}/>
              <span className="pl-1 fs-16">Divya Priya</span>
            </div>
            <div className="d-flex align-items-center mt-2">
              <FaEnvelope size={20} />
              <span className="pl-1 fs-16">divyamailz19999@gmail.com</span>
            </div>
          </div>
         
        </Col>
        <Col xs={24} md={12} className="about-text-col">
          <span className="c_fff">
          A motivated Computer Science graduate with 3.5 years of hands-on experience in web application development, specializing in PHP, MySQL, and advanced web technologies. Proficient in modern frameworks like Spring Boot, MongoDB, React.js, and Redux, with a strong understanding of agile methodologies. Passionate about leveraging cutting-edge tools to build scalable and efficient applications. Seeking a challenging role to further enhance my skills and contribute to the success of an innovative organization.
          </span>
        </Col>
      </Row>
      <div className="skills-section p-5 pb-0">
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <Progress
                type="circle"
                percent={skill.proficiency}
                format={(percent) => (
                  <span style={{ color: "white" }}>{`${percent}%`}</span>
                )}
                strokeColor="#07d2de"
                trailColor="#ddd" // Ensure the trail color is visible
              />
              <p className="skill-name pl-5">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
