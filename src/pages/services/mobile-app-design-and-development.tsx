import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Nav from '../../components/nav';
import '../../styles/global.css';
import Footer from '../../components/footer';
import Hero from '../../components/hero';
import Accordion from '../../components/accordion';
import CallToAction from '../../components/cta';

const SERVICES_SECTIONS = [
  {
    backgroundColor: 'dark',
    fontColor: 'white',
    title: 'Our Mobile App Design Services',
    paragraphs: [
      {
        title: 'User-Centric Design',
        content:
          'Our skilled design team puts your users at the forefront of the creative process. We craft visually stunning and intuitive interfaces that ensure a seamless user experience, driving engagement and satisfaction.'
      },
      {
        title: 'Custom Solutions',
        content:
          'We understand that every business is unique. Our custom mobile app designs are tailored to your specific needs, branding, and business goals, ensuring a one-of-a-kind application that stands out in the digital landscape.'
      },
      {
        title: 'Cross-Platform Expertise',
        content:
          'Reach a wider audience with our cross-platform development services. Whether you prefer iOS, Android, or both, our developers have the proficiency to create applications that perform seamlessly across various devices.'
      }
    ]
  },
  {
    backgroundColor: 'white',
    fontColor: 'black',
    title: 'Our Mobile App Development Process',
    paragraphs: [
      {
        title: 'Strategic Planning',
        content:
          'Before any code is written, we collaborate with you to understand your business objectives and target audience. Our strategic planning sets the foundation for a successful app development journey.'
      },
      {
        title: 'Prototyping and Wireframing',
        content:
          "We bring your ideas to life with interactive prototypes and detailed wireframes. This phase allows you to visualize the app's functionality and make informed decisions before development begins."
      },
      {
        title: 'Agile Development',
        content:
          'Our agile development methodology ensures flexibility and adaptability throughout the development process. Regular updates and transparent communication keep you informed and involved at every stage.'
      },
      {
        title: 'Thorough Testing',
        content:
          'Rigorous testing is a cornerstone of our development process. We conduct comprehensive testing to identify and resolve any issues, ensuring a robust and reliable application upon launch.'
      }
    ]
  }
];

const ACCORDION_ITEMS = [
  {
    title: 'Experienced Team',
    content: 'Our team comprises skilled designers, developers, and strategists with years of experience in the mobile app development landscape.'
  },
  {
    title: 'Client-Centric Approach',
    content: 'Your satisfaction is our priority. We involve you in every step of the process, valuing your input and ensuring the final product aligns with your vision.'
  },
  {
    title: 'Cutting-Edge Technology',
    content: 'We stay ahead of industry trends and leverage the latest technologies to deliver innovative and future-proof mobile applications.'
  }
];

const MobileAppsPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero title='Mobile App Design and Development' />
      <div>
        <section className='pl-2 pr-2 max-w-lg m-auto'>
          <h3 className='pb-1 fs-32'>
            Welcome to A to B Designs: Your Premier <span className='c-light'>Mobile App Development</span> Partner
          </h3>
          <p className='fs-20'>
            At A to B Designs, we specialize in turning your innovative ideas into cutting-edge mobile applications that captivate users and elevate your business to new
            heights. With a proven track record in mobile app design and development, we bring creativity, expertise, and a client-centric approach to every project.
          </p>
        </section>
      </div>
      <div>
        <section className='pt-5 pb-5'>
          {SERVICES_SECTIONS.map(section => (
            <div className='mt-2 mb-2'>
              <div className={`bg-${section.backgroundColor} c-${section.fontColor} p-2`}>
                <div className='max-w-lg lg-d-flex lg-col-gap-2 m-auto'>
                  <div className='pb-2'>
                    <h3 className='fs-28 pb-1'>{section.title}</h3>
                    {section.paragraphs.map(paragraph => (
                      <p className='fs-20 pb-1'>
                        <strong>{paragraph.title}:</strong> {paragraph.content}
                      </p>
                    ))}
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
            <strong>
              Ready to transform your ideas into a powerful mobile app? Contact A to B Designs today to kickstart your journey into unparalleled mobile app design and
              development.
            </strong>
          </p>
          <CallToAction to='/contact-us' title='Contact Us Today' />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MobileAppsPage;

export const Head: HeadFC = () => <title>Mobile App Design and Development | A to B Designs</title>;
