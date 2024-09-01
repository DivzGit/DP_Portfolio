import React from "react";
import Slider from "react-slick";
import { Card, Typography, Row, Col } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import web1 from "../assets/images/web1.jpg";
import web2 from "../assets/images/web2.jpg";
import web3 from "../assets/images/web3.jpg";
import './Service.css';

const { Title, Paragraph } = Typography;

const services = [
  {
    id: 1,
    image: web1,
    alt: "web1",
    description: "jl dj dfdsfdskfjds dsfjoidsjfuidshf dsfjkjdsfjdhsjf fdldsjflidjsoifue mnvknxvncxmv cvcxn",
  },
  {
    id: 2,
    image: web2,
    alt: "web2",
    description: "jl dj dfdsfdskfjds dsfjoidsjfuidshf dsfjkjdsfjdhsjf fdldsjflidjsoifue mnvknxvncxmv cvcxn",
  },
  {
    id: 3,
    image: web3,
    alt: "web3",
    description: "jl dj dfdsfdskfjds dsfjoidsjfuidshf dsfjkjdsfjdhsjf fdldsjflidjsoifue mnvknxvncxmv cvcxn",
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
    autoplaySpeed: 3000,  
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
