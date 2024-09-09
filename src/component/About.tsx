import React from "react";
import { Typography, Row, Col, Progress } from "antd";
import { FaUser, FaEnvelope } from "react-icons/fa";
import "./About.css";
import html from "../assets/images/html.svg";
import css from "../assets/images/css.svg";
import javaScript from "../assets/images/javascript.svg";
import react from "../assets/images/react.svg";
import mongo from "../assets/images/mongo.svg";
import redux from "../assets/images/redux.svg";
import java from "../assets/images/java.svg";
import typescript from "../assets/images/typescript.svg";

interface Skill {
  name: string;
  proficiency: number;
  image: string;
}

const skills: Skill[] = [
  { name: "HTML", proficiency: 90, image: html },
  { name: "CSS", proficiency: 90, image: css },
  { name: "javaScript", proficiency: 85, image: javaScript },
  { name: "react", proficiency: 70, image: react },
  { name: "Redux", proficiency: 60, image: redux },
  { name: "typescript", proficiency: 60, image: typescript },
  { name: "java", proficiency: 50, image: java },
  { name: "MongoDB", proficiency: 70, image: mongo },
];

const About: React.FC = () => {
  return (
    <section id="about" className="about-section section_row" style={{ height: "auto" }}>
      <div className="center-container">
        <div className="text-container">
          <span className="background-text">RESUME</span>
          <span className="foreground-text">
            ABOUT <span className="highlight">ME</span>
          </span>
        </div>
      </div>
      <Row gutter={16} justify="center" align="middle" className="mt-5">
        <Col xs={24} md={12}>
          <p className="resume-title c_07d2de">PERSONAL INFOS</p>
          <div>
            <div className="d-flex align-items-center">
              <FaUser size={20} />
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
              <div className="progress-with-image">
                <Progress
                  type="circle"
                  percent={skill.proficiency}
                  format={() => ""}
                  strokeColor="#07d2de"
                  trailColor="#ddd"
                  width={120}
                />
                <img src={skill.image} alt={skill.name} className="progress-image" />
              </div>
              <p className="skill-name pl-1">{skill.name}</p>
              <p className="skill-name pl-1 m-0 mt-1">{skill.proficiency}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
