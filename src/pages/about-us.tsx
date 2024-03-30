import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Footer from '../components/footer';
import Hero from '../components/hero';
import CallToAction from '../components/cta';
import { ArrowRightIcon } from '../lib/icons';
import Accordion from '../components/accordion';

const SERVICES_LINKS = [
  {
    to: '/services/web-design-and-development',
    title: 'Web Design and Development',
    content:
      'Our web design and development services are crafted to elevate your online presence. We blend aesthetics with functionality, ensuring your website not only looks impressive but also delivers a seamless user experience.'
  },
  {
    to: '/services/mobile-app-design-and-development',
    title: 'Mobile App Design and Development',
    content:
      'Navigate the mobile landscape with confidence. A to B Designs creates innovative and user-friendly mobile applications for iOS and Android platforms, tailored to your brand and audience.'
  },
  {
    to: '/services/api-integrations-and-automation',
    title: 'API Integrations and Automation',
    content:
      'Optimize your operations with our API integrations and automation solutions. We streamline your workflows, enhance functionality, and pave the way for efficiency in a digital age.'
  },
  {
    to: '/services/cloud-solutions',
    title: 'Cloud Solutions',
    content:
      "Move your business forward with our scalable and secure cloud solutions. Whether it's Google Cloud Platform, Amazon Web Services, or Salesforce, we ensure your digital infrastructure is robust and future-proof."
  }
];

const ACCORDION_ITEMS = [
  {
    title: 'Experience and Expertise',
    content:
      'With years of experience in the digital realm, A to B Designs brings a wealth of expertise to every project. Our team comprises skilled professionals dedicated to staying at the forefront of industry trends.'
  },
  {
    title: 'Innovation-Driven',
    content:
      'We thrive on innovation. From the latest technologies to creative solutions, A to B Designs is committed to bringing fresh ideas to the table, ensuring your digital presence is ahead of the curve.'
  },
  {
    title: 'Client Satisfaction',
    content:
      'Your success is our success. A to B Designs is proud of its track record of satisfied clients who have experienced the positive impact of our tailored digital solutions.'
  }
];

const AboutUsPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero title='About Us' />
      <div>
        <section className='pl-2 pr-2 max-w-lg m-auto'>
          <h3 className='pb-1 fs-32'>
            Welcome to A to B Designs: Crafting <span className='c-light'>Digital Excellence</span> for <span className='c-light'>Your Success</span>
          </h3>
          <p className='fs-20'>
            At A to B Designs, we are more than a digital agency; we are your partners in turning visions into extraordinary digital experiences. With a commitment to
            innovation, excellence, and client satisfaction, we bring a fresh perspective to every project, ensuring your brand stands out in the digital landscape.
          </p>
        </section>
      </div>
      <div>
        <section className='pt-5 pb-5'>
          <div className='pr-2 pb-2 pl-2 max-w-lg m-auto'>
            <h2 className='fs-32'>
              <span className='c-light'>About</span> A to B Designs
            </h2>
          </div>
          <div className='lg-d-flex'>
            <div className='p-2 bg-dark c-white lg-flex-1'>
              <div className='lg-mw-half lg-ml-auto lg-pr-2'>
                <p className='fs-28 pb-1'>
                  <strong>Who We Are</strong>
                </p>
                <p className='fs-20'>
                  A to B Designs is a dynamic and forward-thinking digital solutions company that specializes in transforming ideas into impactful digital realities. From web
                  design and development to mobile app creation, API integrations, automation, and cutting-edge cloud solutions, we offer a comprehensive suite of services to
                  meet your diverse needs.
                </p>
              </div>
            </div>
            <div className='p-2 lg-flex-1'>
              <div className='lg-mw-half lg-mr-auto lg-pl-2'>
                <p className='fs-28 pb-1'>
                  <strong>
                    Our <span className='c-light'>Approach</span>
                  </strong>
                </p>
                <p className='fs-20 pb-2'>
                  What sets us apart is our client-centric approach. We believe in collaboration, transparency, and a thorough understanding of your business goals. Every
                  project is a unique journey, and we are here to guide you from point A to point B with creativity, expertise, and unwavering commitment.
                </p>
                <CallToAction to='/contact-us' title='Get In Touch' />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className='pr-2 pb-5 pl-2 max-w-lg m-auto'>
          <div className='pb-2'>
            <h2 className='fs-32'>
              Our <span className='c-light'>Services</span>
            </h2>
          </div>
          <div className='lg-d-flex lg-flex-wrap lg-col-gap-2'>
            {SERVICES_LINKS.map((link, ind) => (
              <Link to={link.to} key={ind} className='p-2 mb-2 bg-light c-white d-block td-none lg-flex-50'>
                <h3 className='fs-24'>{link.title}</h3>
                <p className='fs-20 pt-1 pb-1'>{link.content}</p>
                <div className='d-flex jc-flex-end'>
                  <ArrowRightIcon width={32} height={32} color='white' />
                </div>
              </Link>
            ))}
          </div>
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
            <strong>Ready to embark on a digital journey with A to B Designs? Contact us today, and let's start creating digital excellence together.</strong>
          </p>
          <CallToAction to='/contact-us' title='Contact Us Today' />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;

export const Head: HeadFC = () => <title>About Us | A to B Designs</title>;
