import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Carousel from '../components/carousel';
import { StaticImage } from 'gatsby-plugin-image';
import Footer from '../components/footer';
import CallToAction from '../components/cta';
import BoxLink from '../components/boxLink';

const SLIDES: any[] = [
  <StaticImage src='../images/makeitmakesense_preview.png' alt='Make It Make Sense Band Website' />
  // <StaticImage src='../images/us-ecologic-preview.png' alt='US-EcoLogic Website' />,
  // <StaticImage src='../images/efficiencypromise_preview.png' alt='Efficiency Promise Web App' />
];

const SERVICES_LINKS: { path: string; title: string }[] = [
  { path: '/services/web-design-and-development', title: 'Web Design and Development' },
  { path: '/services/mobile-app-design-and-development', title: 'Mobile App Design and Development' },
  { path: '/services/api-integrations-and-automation', title: 'API Integrations and Automation' },
  { path: '/services/cloud-solutions', title: 'Cloud Solutions' }
];

const SKILLS = [
  { category: 'Languages & Frameworks', items: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'Go', 'SQL', 'React', 'Next.js', 'Gatsby'] },
  { category: 'Tools & Technologies', items: ['Google Cloud', 'AWS', 'Salesforce', 'Digital Ocean', 'Netlify', 'Sanity', 'Contentful', 'Bitbucket', 'Github', 'Figma'] }
];

const PROCESS_ITEMS = [
  { step: 1, title: 'Discover', desc: 'We will identify your requirements and establish the best technology stack.' },
  { step: 2, title: 'Design', desc: 'We will use the information gathered from discovery to deliver visuals.' },
  { step: 3, title: 'Develop', desc: 'We will solution the strategy established during discovery and design.' },
  { step: 4, title: 'Deliver', desc: 'We will present and deliver the final product for feedback and review.' }
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* Hero */}
      <div>
        <div className='pt-5 pr-2 pb-5 pl-2 med-d-flex max-w-lg m-auto'>
          <div className='mb-3 med-flex-1'>
            <div className='pb-2'>
              <p className='fs-36 fw-bold'>
                A to B <span className='c-dark'>Designs</span>
              </p>
              <p className='fs-32'>From Concept</p>
              <p className='fs-32'>To Completion</p>
            </div>
            <CallToAction to='/contact-us' title='Book Free Consultation' />
          </div>
          <div className='med-flex-1'>
            <Carousel slides={SLIDES} />
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main>
        <div>
          <div className='lg-d-flex'>
            <section className='bg-dark pt-5 pr-2 pb-5 pl-2 lg-flex-1'>
              <div className='lg-mw-half lg-ml-auto lg-pr-2'>
                <div className='pb-2'>
                  <h3 className='fs-28 c-white pb-1'>Welcome to A to B Designs: Your Gateway to Digital Excellence</h3>
                  <p className='c-white fs-20'>
                    At A to B Designs, we're not just a digital agency; we're architects of innovation, crafting digital solutions that transcend expectations. From web design
                    and development to cutting-edge mobile apps, API integrations, and transformative cloud solutions, we're your partners in turning ideas into digital
                    masterpieces.
                  </p>
                </div>
                <CallToAction to='/contact-us' title='Learn More About Us' backgroundColor='black' />
              </div>
            </section>
            <section className='pt-5 pr-2 pb-2 pl-2 lg-flex-1'>
              <div className='lg-mw-half lg-mr-auto lg-pl-2'>
                <div>
                  <h3 className='fs-28 pb-1'>
                    Expertise that <span className='c-dark'>Transforms</span>
                  </h3>
                  <p className='fs-18 pb-1'>
                    <strong>Web Design and Development:</strong> Immerse your audience in a visual symphony. Our web design and development services blend creativity with
                    functionality, ensuring your online presence is not just aesthetically pleasing but strategically designed for success.
                  </p>
                  <p className='fs-18 pb-1'>
                    <strong>Mobile App Innovation:</strong> Navigate the mobile landscape with confidence. A to B Designs specializes in mobile app design and development,
                    creating intuitive, engaging, and user-friendly applications that leave a lasting impression.
                  </p>
                  <p className='fs-18 pb-1'>
                    <strong>API Integrations and Automation:</strong> Optimize your operations seamlessly. With our API integrations and automation solutions, we streamline
                    your workflows, enhance functionality, and propel your business into a new era of efficiency.
                  </p>
                  <p className='fs-18 pb-1'>
                    <strong>Cloud Solutions for Tomorrow:</strong> Elevate your digital infrastructure with our scalable and secure cloud solutions. Whether it's Google Cloud
                    Platform, Amazon Web Services, or Salesforce, A to B Designs ensures your business is ready for the future.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className='pl-2 pr-2 lg-mt-neg-1'>
            <ul className='lst-none med-d-flex med-flex-wrap med-col-gap-1 max-w-lg m-auto'>
              {SERVICES_LINKS.map((link, index) => (
                <li key={index} className='mb-1 med-flex-50 lg-flex-1'>
                  <BoxLink path={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='lg-d-flex pt-5'>
          <section className='pt-5 pr-2 pb-5 pl-2 lg-flex-1'>
            <div className='lg-mw-half lg-ml-auto lg-pr-2'>
              <div className='pb-2'>
                <h3 className='fs-28 pb-1'>
                  Ready to Transform Your <span className='c-dark'>Digital Landscape</span>?
                </h3>
                <p className='fs-18'>
                  Your journey to digital excellence starts here. Explore the possibilities with A to B Designs – where ideas become digital realities. Contact us today, and
                  let's embark on a transformative digital journey together.
                </p>
              </div>
              <CallToAction to='/contact-us' title='Talk To An Expert' />
            </div>
          </section>
          <div className='bg-dark pt-5 pr-2 pb-3 pl-2 c-white lg-flex-1'>
            <div className='lg-mw-half lg-mr-auto lg-pl-2'>
              <div className='pb-2'>
                <h3 className='fs-28 pb-1'>Search Engine Visibility</h3>
                <p className='fs-18'>
                  <strong>Beyond Aesthetics:</strong> Benefit from the expertise of a team passionate about staying ahead in the ever-evolving digital landscape. A to B
                  Designs brings together seasoned professionals dedicated to delivering excellence.
                </p>
              </div>
              <div className='med-d-flex med-flex-wrap med-col-gap-2'>
                {SKILLS.map(skill => (
                  <div key={skill.category} className='p-1 border-white border-1 border-solid mb-2 med-flex-1'>
                    <p className='fw-bold fs-24 pb-1'>{skill.category}</p>
                    {skill.items.map(item => (
                      <p className='fs-20'>{item}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='pt-5 pr-2 pb-5 pl-2'>
          <div className='max-w-lg m-auto'>
            <section className='pb-2'>
              <h3 className='fs-28 pb-1 text-center'>
                Client-Centric <span className='c-dark'>Collaboration</span>
              </h3>
              <p className='fs-18 pb-1'>
                <strong>Your Vision, Our Mission:</strong> We believe in collaboration. Your vision is the driving force behind everything we do. A to B Designs involves you
                in every step of the process, ensuring your digital journey aligns seamlessly with your business goals.
              </p>
              <p className='fs-18'>
                <strong>Experienced Professionals:</strong> Benefit from the expertise of a team passionate about staying ahead in the ever-evolving digital landscape. A to B
                Designs brings together seasoned professionals dedicated to delivering excellence.
              </p>
            </section>
            <div className='pb-2 med-d-flex med-col-gap-2'>
              {PROCESS_ITEMS.map(item => (
                <div key={item.step} className='pt-1 pb-1 med-flex-1'>
                  <div className='bg-dark d-flex jc-center ai-center' style={{ width: 60, height: 60 }}>
                    <p className='c-white fs-32 fw-bold'>{item.step}</p>
                  </div>
                  <p className='fs-28 fw-bold pt-05 pb-05'>{item.title}</p>
                  <p className='fs-18'>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className='d-flex jc-center'>
              <CallToAction to='/contact-us' title='Become Our Next Client' />
            </div>
          </div>
        </div>
        <div className='bg-dark'>
          <div className='pt-5 pr-2 pb-5 pl-2 max-w-lg m-auto'>
            <p className='c-white fs-28 pb-2'>Digital Solutions You Can Be Proud Of</p>
            <div className='med-d-flex med-col-gap-2'>
              {SLIDES.map(slide => (
                <div className='pb-2'>{slide}</div>
              ))}
            </div>
            <div className='pt-2'>
              <CallToAction to='/portfolio' title='View Our Portfolio' backgroundColor='black' />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home | A to B Designs</title>;
