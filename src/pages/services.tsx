import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Footer from '../components/footer';
import Hero from '../components/hero';
import BoxLink from '../components/boxLink';
import Accordion from '../components/accordion';
import CallToAction from '../components/cta';

const SERVICES_SECTIONS = [
  {
    backgroundColor: 'dark',
    fontColor: 'white',
    path: '/services/web-design-and-development',
    title: 'Web Design and Development',
    paragraphs: [
      {
        title: 'Strategic Digital Presence',
        content:
          'A to B Designs crafts visually stunning and strategically effective websites that leave a lasting impression. Our web design and development services ensure your online presence is not just eye-catching but also optimized for performance and functionality.'
      },
      {
        title: 'User-Centric Approach',
        content: 'We prioritize the end-user experience, ensuring your website is intuitive, responsive, and tailored to your target audience.'
      }
    ]
  },
  {
    backgroundColor: 'white',
    fontColor: 'black',
    path: '/services/mobile-app-design-and-development',
    title: 'Mobile App Design and Development',
    paragraphs: [
      {
        title: 'Innovative Mobile Solutions',
        content:
          'Elevate your brand with cutting-edge mobile applications. A to B Designs specializes in mobile app design and development, creating customized solutions for iOS and Android platforms.'
      },
      {
        title: 'Seamless User Experience',
        content: 'Our mobile apps are crafted with a focus on seamless user experiences, from intuitive interfaces to efficient functionality.'
      }
    ]
  },
  {
    backgroundColor: 'dark',
    fontColor: 'white',
    path: '/services/api-integrations-and-automation',
    title: 'API Integrations and Automation',
    paragraphs: [
      {
        title: 'Streamlined Operations',
        content:
          'A to B Designs empowers your business with seamless API integrations and automation solutions. We connect your systems, enhance functionality, and automate repetitive tasks, allowing you to focus on what matters most – growing your business.'
      },
      {
        title: 'Custom Solutions',
        content: 'No two businesses are alike. Our team excels in creating tailored solutions that fit your unique requirements, ensuring optimal performance and efficiency.'
      }
    ]
  },
  {
    backgroundColor: 'white',
    fontColor: 'black',
    path: '/services/cloud-solutions',
    title: 'Cloud Solutions',
    paragraphs: [
      {
        title: 'Scalable and Secure',
        content:
          'Move your business to the cloud with confidence. A to B Designs offers cloud solutions tailored for Google Cloud Platform, Amazon Web Services, and Salesforce. Ensure scalability, security, and innovative flexibility in your operations.'
      },
      {
        title: 'Future-Proof Technology',
        content: 'Our cloud solutions are designed to evolve with your business, providing a foundation for growth and adaptation to industry trends.'
      }
    ]
  }
];

const ACCORDION_ITEMS = [
  {
    title: 'End-to-End Digital Expertise',
    content:
      'A to B Designs is your one-stop solution for all things digital. From web design to cloud solutions, we offer end-to-end expertise that ensures cohesion and excellence across your digital landscape.'
  },
  {
    title: 'Innovation at the Core',
    content:
      'We stay ahead of the curve by incorporating the latest technologies and industry best practices into every project. Your digital presence should not just meet current standards but set new ones.'
  },
  {
    title: 'Client-Centric Approach',
    content:
      'Your success is our priority. A to B Designs collaborates closely with you to understand your unique needs, providing personalized solutions that drive your business forward.'
  }
];

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero title='Services' />
      <div>
        <section className='pl-2 pr-2 max-w-lg m-auto'>
          <h3 className='pb-1 fs-32'>
            A to B Designs: Transforming Ideas into <span className='c-light'>Digital Excellence</span>
          </h3>
          <p className='fs-20'>
            Welcome to A to B Designs, your go-to destination for comprehensive and innovative digital solutions. At A to B Designs, we pride ourselves on providing a suite of
            services that cover the entire spectrum of your digital needs, ensuring your business thrives in the dynamic online landscape.
          </p>
        </section>
      </div>
      <div>
        <section className='pt-5 pb-5'>
          <div className='pr-2 pl-2 max-w-lg m-auto'>
            <h2 className='fs-32'>
              Our <span className='c-light'>Services</span>
            </h2>
          </div>
          {SERVICES_SECTIONS.map(section => (
            <div className='mt-2 mb-2'>
              <div className={`bg-${section.backgroundColor} c-${section.fontColor} p-2`}>
                <div className='max-w-lg m-auto lg-d-flex'>
                  <div className='pb-2'>
                    <h3 className='fs-28 pb-1'>{section.title}</h3>
                    {section.paragraphs.map(paragraph => (
                      <p className='fs-20 pb-1'>
                        <strong>{paragraph.title}:</strong> {paragraph.content}
                      </p>
                    ))}
                  </div>
                  <div>
                    <BoxLink path={section.path} title={section.title} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div>
        <section className='pt-5 pr-2 pb-5 pl-2 bg-dark c-white'>
          <div className='max-w-lg m-auto'>
            <div className='pb-2'>
              <h2 className='fs-36'>Why Choose A to B Designs?</h2>
            </div>
            <Accordion items={ACCORDION_ITEMS} />
          </div>
        </section>
      </div>
      <div>
        <section className='pt-5 pr-2 pb-5 pl-2 max-w-lg m-auto'>
          <p className='fs-28 pb-1'>
            <strong>Ready to embark on a journey of digital transformation? Contact A to B Designs today and let's turn your ideas into digital excellence.</strong>
          </p>
          <CallToAction to='/contact-us' title='Contact Us Today' />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services | A to B Designs</title>;
