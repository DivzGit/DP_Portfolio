import React from "react";
import Slider from "react-slick";
import { Card, Typography, Row, Col } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WebApplication from "../assets/images/WebApplication.svg";
import AgileMethod from "../assets/images/agileMethod.svg";
import FullStack from "../assets/images/Full-Stack.png";
import API from "../assets/images/API.png";
import DatabaseDesign from "../assets/images/DatabaseDesign.png";
import Maintenance from "../assets/images/Maintenance.png";
import './Service.css';

const { Title, Paragraph } = Typography;

const services = [
  {
    id: 1,
    image: WebApplication,
    alt: "Web Application Development",
    description: "With 3.5 years of hands-on experience, I specialize in building robust and scalable web applications using technologies like PHP, MySQL, and JavaScript. Whether you're looking for a custom-built solution or improvements to an existing platform, I deliver high-performance applications tailored to your business needs.",
  },
  {
    id: 2,
    image: FullStack,
    alt: "Full-Stack",
    description: "Proficient in both front-end and back-end development, I utilize modern frameworks such as React.js and Redux for interactive and user-friendly interfaces, coupled with Spring Boot and MongoDB for a solid, efficient backend. I ensure seamless integration between the two for a smooth user experience.",
  },
  {
    id: 3,
    image: API,
    alt: "API Development & Integration",
    description: "I design and implement RESTful APIs, ensuring secure and scalable communication between different platforms and services. From third-party API integrations to building custom endpoints, I offer solutions that ensure your application’s data flows smoothly.",
  },
  {
    id: 4,
    image: AgileMethod,
    alt: "AgileMethod",
    description: "Experienced in Agile methodologies, I excel in fast-paced environments, consistently delivering high-quality results through collaboration, sprints, and continuous improvement. I actively participate in scrum ceremonies and work closely with teams to drive project success.",
  },
  {
    id: 5,
    image: DatabaseDesign,
    alt: "Database Design & Management",
    description: "Expert in MySQL and MongoDB database management, I ensure data integrity, optimize performance, and design efficient database structures to meet the needs of your applications, whether you're dealing with small datasets or large-scale systems.",
  },
  {
    id: 6,
    image: Maintenance,
    alt: "Maintenance & Support",
    description: "Beyond development, I offer ongoing support and maintenance for web applications, ensuring they remain secure, up-to-date, and optimized for performance. This includes troubleshooting, bug fixes, and implementing new features as your business evolves.",
  },

 
];

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,   
    autoplaySpeed: 8000,  
    responsive: [
      {
        breakpoint: 768, // For screens 768px and below (Mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  return (
    <section className="service-section section_row p-5">
      <div class="center-container">
        <div class="text-container">
          <span class="background-text">Works</span>
          <span class="foreground-text">
           <span class="highlight">Service</span>
          </span>
        </div>
      </div>
      {/* <div className="service-header">
        <Paragraph className="service-description">
          loream cjh cdscndsncm dscndskjncksdcndsjcndscnkds cdcndksjcndms cdsnckjnsdj
        </Paragraph>
      </div> */}
      <div className="service-slider mt-5">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <Card
                cover={<img alt={service.alt} src={service.image} />}
                className="service-card-content"
              >
                <Paragraph className="service-card-description">
                  {service.description}
                </Paragraph>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Service;
