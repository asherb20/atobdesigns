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
    title: 'Innovative Design',
    paragraphs: [
      {
        title: 'Strategic Aesthetics',
        content:
          'A to B Designs believes in the power of first impressions. Our web design services are meticulously crafted to captivate your audience from the moment they land on your website. We blend creativity with strategic aesthetics to ensure a visually stunning and user-friendly interface.'
      },
      {
        title: 'Responsive Design',
        content:
          'In an era where users access websites from various devices, responsiveness is key. Our designs adapt seamlessly to different screen sizes, guaranteeing an optimal user experience whether your audience is on desktop, tablet, or mobile.'
      }
    ]
  },
  {
    backgroundColor: 'white',
    fontColor: 'black',
    title: 'Robust Development',
    paragraphs: [
      {
        title: 'Custom Solutions',
        content:
          'No two businesses are identical, and neither should their websites be. A to B Designs specializes in creating bespoke web solutions tailored to your unique needs and brand identity. We transform your ideas into a fully functional and dynamic online presence.'
      },
      {
        title: 'Scalability',
        content:
          "We don't just build for today; we design for the future. A to B Designs ensures your website is built on a scalable architecture, ready to evolve alongside your business growth and changing digital needs."
      }
    ]
  }
];

const ACCORDION_ITEMS = [
  {
    title: 'Collaborative Process',
    content:
      'At A to B Designs, we believe in collaboration. Our web design and development process involves you every step of the way, ensuring your vision aligns seamlessly with the final product.'
  },
  {
    title: 'Experienced Team',
    content:
      'Our team is a blend of seasoned professionals passionate about staying at the forefront of web design trends and technologies. Benefit from the collective expertise of individuals dedicated to delivering excellence.'
  },
  {
    title: 'Search Engine Optimization (SEO)',
    content:
      'We understand the importance of visibility. A to B Designs integrates SEO best practices into our web design and development process, ensuring your website is not just beautiful but also search engine friendly.'
  },
  {
    title: 'Client-Centric Approach',
    content:
      "Your satisfaction is our priority. A to B Designs is proud of its reputation for exceptional client service. We're here to address your concerns, answer your questions, and make the web design and development journey a positive experience for you."
  }
];

const WebsitesPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero title='Web Design and Development' />
      <div>
        <section className='pl-2 pr-2 max-w-lg m-auto'>
          <h3 className='pb-1 fs-32'>
            A to B Designs: Crafting Exceptional Web Experiences for <span className='c-light'>Your Brand</span>
          </h3>
          <p className='fs-20'>
            Welcome to A to B Designs, your dedicated partner in the world of web design and development. At A to B Designs, we don't just build websites; we create digital
            experiences that resonate with your audience, elevate your brand, and drive meaningful engagement.
          </p>
        </section>
      </div>
      <div>
        <section className='pt-5 pb-5'>
          <div className='pr-2 pl-2 max-w-lg m-auto'>
            <h2 className='fs-32'>
              Our <span className='c-light'>Web Design and Development</span> Services
            </h2>
          </div>
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
              <h2 className='fs-36'>Why Choose A to B Designs for Web Design and Development?</h2>
            </div>
            <Accordion items={ACCORDION_ITEMS} />
          </div>
        </section>
      </div>
      <div>
        <section className='pt-5 pr-2 pb-5 pl-2 max-w-lg m-auto'>
          <p className='fs-28 pb-1'>
            <strong>
              Ready to redefine your online presence? Contact A to B Designs today, and let's embark on a journey of crafting exceptional web experiences for your brand.
            </strong>
          </p>
          <CallToAction to='/contact-us' title='Contact Us Today' />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WebsitesPage;

export const Head: HeadFC = () => <title>Web Design and Development | A to B Designs</title>;
