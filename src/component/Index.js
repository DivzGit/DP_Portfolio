import React from "react";
import { Row, Col, Typography, Button } from "antd";
import Developer from "../assets/images/developer-removebg.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Index.css";
import Icons from "./Icon";

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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </Col>
        <Col xl={8} lg={8} md={12} sm={24} xs={24} className="index-image-col">
          <div className="index_left_cricle">
            <div className="index_left_inner_cricle"></div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Index;
