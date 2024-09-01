import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, message, Row, Col } from "antd";
import "./Contact.css";
import { FaPaperPlane } from 'react-icons/fa';
import NewsletterSubscription from './NewsletterSubscription.js';

const { Title } = Typography;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/contact/send",
        values
      );
      console.log(response.data);
      message.success("Email sent successfully");
    } catch (error) {
      console.error("There was an error sending the email!", error);
      message.error("Failed to send email");
    }
  };

  return (
    <section className="contact section_row">
      <div class="center-container mb-5">
        <div class="text-container">
          <span class="background-text">Contact</span>
          <span class="foreground-text">
            Get in <span class="highlight">Touch</span>
          </span>
        </div>
      </div>

      <Row justify="center" align="middle" className="mt-5">
        <Col xl={8} lg={8} md={12} sm={24} xs={24} className="index-text-col">
          <p level={1} className="index-title">
            DON'T BE SHY!
          </p>
          <p className="">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
        </Col>
        <Col
          xl={14}
          lg={14}
          md={12}
          sm={24}
          xs={24}
          className="index-image-col"
        >
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={formData}
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <Row justify="center" align="middle" className="">
              <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                <Form.Item
                  label="Your Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                
                >
                  <Input name="name" onChange={handleChange} />
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                <Form.Item
                  label="Your Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email",
                    },
                  ]}
                  
                >
                  <Input name="email" onChange={handleChange} />
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                <Form.Item
                  label="Subject"
                  name="subject"
                  rules={[
                    { required: true, message: "Please enter the subject" },
                  ]}
                  
                >
                  <Input name="subject" onChange={handleChange} />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Your Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea name="message" onChange={handleChange} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#07d2de", borderColor: "#07d2de",padding: "10px 20px" }}
              >
                Send Message <FaPaperPlane />
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <NewsletterSubscription  className="mt-5"/>
    </section>
  );
};

export default Contact;
