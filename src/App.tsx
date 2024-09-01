import './App.css';
import Header from './component/Header';
import Index from './component/Index';
import About from './component/About';
import Service from './component/Service';
import Resume from './component/Resume';
import Contact from './component/Contact'; 
import Footer from './component/Footer'; 
import Icons from './component/Icon';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App text-white">
      <Header />
      <Icons/>
      <Element name="index">
        <Index />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="service">
        <Service />
      </Element>
      {/* <Element name="resume">
        <Resume />
      </Element> */}
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
