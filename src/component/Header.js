import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { BarsOutlined } from "@ant-design/icons";
import { Link } from "react-scroll";
import logo from "../assets/images/divya_logo.png";
import "./Header.css";
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); 

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleSetActive = (key) => {
    setActiveLink(key); 
  };
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        <Menu mode="horizontal" className="desktop-menu">
          <Menu.Item key="home"  className={activeLink === "home" ? "active-link" : ""}>
            <Link to="index" smooth={true} duration={500}  onClick={() => handleSetActive("home")}           >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="about" className={activeLink === "about" ? "active-link" : ""}>
            <Link to="about" smooth={true} duration={500}  onClick={() => handleSetActive("about")}>
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="service" className={activeLink === "service" ? "active-link" : ""}>
            <Link to="service" smooth={true} duration={500}  onClick={() => handleSetActive("service")}>
              Service
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="resume" className={activeLink === "resume" ? "active-link" : ""}>
            <Link to="resume" smooth={true} duration={500}  onClick={() => handleSetActive("resume")}>
              Resume
            </Link>
          </Menu.Item> */}
          <Menu.Item key="contact" className={activeLink === "contact" ? "active-link" : ""}>
            <Link to="contact" smooth={true} duration={500}  onClick={() => handleSetActive("contact")}>
              Contact
            </Link>
          </Menu.Item>
        </Menu>
        <div className="download">
            <p>
            <Link to="contact">
            <span className="download_btn"><span className="resume_text">Hire Me</span></span>
            </Link>
            </p>
          </div>
        {/* <button><Link to="contact">Hire Me </Link></button> */}
        <Button type="text" onClick={showDrawer} className="mobile-menu-button">
          <BarsOutlined />
        </Button>
      </nav>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        className="mobile-drawer"
      >
        <Menu mode="inline" theme="dark" style={{ lineHeight: "64px" }}>
          <Menu.Item key="home">
            <Link
              to="index"
              smooth={true}
              duration={500}
              style={{ color: "white" }}
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link
              to="about"
              smooth={true}
              duration={500}
              style={{ color: "white" }}
            >
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="service">
            <Link
              to="service"
              smooth={true}
              duration={500}
              style={{ color: "white" }}
            >
              Service
            </Link>
          </Menu.Item>
          {/* <Menu.Item key="resume">
            <Link
              to="resume"
              smooth={true}
              duration={500}
              style={{ color: "white" }}
            >
              Resume
            </Link>
          </Menu.Item> */}
          <Menu.Item key="contact">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              style={{ color: "white" }}
            >
              Contact
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </header>
  );
};

export default Header;
