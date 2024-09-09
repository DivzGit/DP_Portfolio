import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Typography, message, Row, Col } from "antd";
import { FaPaperPlane } from 'react-icons/fa';
import NewsletterSubscription from './NewsletterSubscription'; // Assuming NewsletterSubscription is a .tsx file
import "./Contact.css";

const { Title } = Typography;

interface FormData {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  message: string;
  subject: string;
}

const Contact: React.FC = () => {
  const [form] = Form.useForm(); // Get the form instance

  const handleSubmit = async (values: FormData) => {
    try {
      const response = await axios.post(
        "http://localhost:8035/api/contact/send",
        values
      );
      console.log(response.data);
      message.success("Email sent successfully");
      form.resetFields(); // Reset the form fields after successful submission
    } catch (error) {
      console.error("There was an error sending the email!", error);
      message.error("Failed to send email");
    }
  };

  return (
    <section className="contact section_row"style={{ height: "auto" }}>
      <div className="center-container mb-5" >
        <div className="text-container">
          <span className="background-text">Contact</span>
          <span className="foreground-text">
            Get in <span className="highlight">Touch</span>
          </span>
        </div>
      </div>

      <Row justify="center" align="middle" className="mt-5">
        <Col xl={8} lg={8} md={12} sm={24} xs={24} className="index-text-col">
          <p className="index-title">DON'T BE SHY!</p>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
        </Col>
        <Col xl={14} lg={14} md={12} sm={24} xs={24} className="index-image-col">
          <Form
            form={form} // Pass the form instance
            layout="vertical"
            onFinish={handleSubmit}
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <Row justify="center" align="middle">
              <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                <Form.Item
                  label="Your Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input />
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
                  <Input />
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
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Your Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#07d2de", borderColor: "#07d2de", padding: "10px 20px" }}
              >
                Send Message <FaPaperPlane />
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <NewsletterSubscription />
    </section>
  );
};

export default Contact;
