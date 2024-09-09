import React from "react";
import { Row, Col, Typography, Button } from "antd";
import Developer from "../assets/images/developer-removebg.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Index.css";
import Icons from "./Icon";
import profilepic from "../assets/images/profilepic.png";


const Index = () => {
  return (
    <section className="index-section section_row">
      {/* <Icons /> */}
      <Row justify="center" align="middle" className="">
        <Col xl={14} lg={14} md={12} sm={24} xs={24} className="index-text-col">
        
          <div class="center-container">
            <div class="text-container">
            
              <span class="background-text">full stack</span>
              <span class="foreground-text">
                I'm <span class="highlight">Divya Priya </span>
              </span>
            </div>
          </div>

          <p className="mt-5">
          <div className="moblie_proflie_img">
        <img src={profilepic}></img>
        A motivated Computer Science graduate with 3.5 years of hands-on experience in web application development, specializing in PHP, MySQL, and advanced web technologies. Proficient in modern frameworks like Spring Boot, MongoDB, React.js, and Redux, with a strong understanding of agile methodologies. Passionate about leveraging cutting-edge tools to build scalable and efficient applications. Seeking a challenging role to further enhance my skills and contribute to the success of an innovative organization.

        </div>
          </p>
        </Col>
        <Col xl={8} lg={8} md={12} sm={24} xs={24} className="index-image-col">
          <div className="index_left_cricle">
            <div className="index_left_inner_cricle">
             <img src={profilepic}></img>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Index;
