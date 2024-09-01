import React from 'react';
import { Typography, Button, Row, Col } from 'antd';
import ResumeImg from '../assets/images/developer-removebg.png';
import ResumeFile from '../assets/files/resume.pdf';
import './Resume.css';

const { Title, Paragraph } = Typography;

const Resume = () => {
  return (
    <section className="resume-section section_row">
      <p level={1} className="resume-title text-center c_07d2de" >Resume</p>
      <Row gutter={32} align="middle" justify="center" style={{ minHeight: '100vh', padding: '32px' }}>
        <Col xs={24} md={12} className="resume-image-container">
          <img src={ResumeImg} alt="Developer" className="resume-image" />
        </Col>
        <Col xs={24} md={12} className="resume-content">
          <p className="resume-description c_fff">
            You can view my resume &nbsp;
            <a href={ResumeFile} download className="resume-link">here</a>
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default Resume;
