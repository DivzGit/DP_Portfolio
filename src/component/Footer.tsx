import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text } = Typography;

const FooterComponent: React.FC = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <Footer style={{ backgroundColor: '#001529', color: '#fff', padding: '20px' }}>
      <Row justify="space-between">
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Text strong style={{ color: '#fff' }}>
            © {currentYear} All rights reserved.
          </Text>
        </Col>

        <Col xl={12} lg={12} md={12} sm={24} xs={24} className='float-right'>
          <Text style={{ color: '#fff' }}>
            <a href="/privacy-policy" style={{ color: '#fff', marginRight: '15px' }}>Privacy Policy</a>
            <a href="/terms-of-service" style={{ color: '#fff' }}>Terms of Service</a>
          </Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
