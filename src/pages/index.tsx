import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Carousel from '../components/carousel';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { ArrowRightIcon } from '../lib/icons';

const SLIDES: any[] = [
  <StaticImage src='../images/makeitmakesense_preview.png' alt='Make It Make Sense Band Website' />,
  <StaticImage src='../images/us-ecologic-preview.png' alt='US-EcoLogic Website' />,
  <StaticImage src='../images/efficiencypromise_preview.png' alt='Efficiency Promise Web App' />
];

const SERVICES_LINKS: { path: string; title: string }[] = [
  { path: '/services/websites', title: 'Websites' },
  { path: '/services/mobile-apps', title: 'Mobile Apps' },
  { path: '/services/integrations', title: 'Integrations' },
  { path: '/services/cloud-solutions', title: 'Cloud Solutions' }
];

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* Hero */}
      <div>
        <div className='pt-5 pr-2 pb-5 pl-2'>
          <div className='mb-3'>
            <div className='mb-2'>
              <p className='fs-36 fw-bold m-0'>
                A to B <span className='c-dark'>Designs</span>
              </p>
              <p className='fs-32 m-0'>From Concept</p>
              <p className='fs-32 m-0'>To Completion</p>
            </div>
            <div>
              <Link to='/contact-us' className='bg-light c-white pt-1 pr-2 pb-1 pl-2 fs-16 fw-bold td-none d-inline-block'>
                Book Free Consultation
              </Link>
            </div>
          </div>
          <div>
            <Carousel slides={SLIDES} />
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main>
        <div>
          <div>
            <section className='bg-dark pt-5 pr-2 pb-5 pl-2'>
              <div>
                <div className='pb-2'>
                  <h2 className='fs-28 c-white m-0 pb-05'>About Us</h2>
                  <p className='c-white m-0 fs-16'>We are a web, mobile, and cloud development company based out of Dallas, TX.</p>
                </div>
                <div>
                  <Link to='/contact-us' className='bg-black c-white pt-1 pr-2 pb-1 pl-2 fs-16 fw-bold td-none d-inline-block'>
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </section>
            <section className='pt-5 pr-2 pb-2 pl-2'>
              <div>
                <div>
                  <h2 className='fs-28 pb-05'>
                    Our <span className='c-dark'>Services</span>
                  </h2>
                  <p className='fs-16'>
                    We specialize in website design, website development, mobile app design, mobile app development, automations, integrations, and cloud solutions.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className='pl-2 pb-5 pr-2'>
            <ul className='lst-none'>
              {SERVICES_LINKS.map((link, index) => (
                <li key={index} className='mb-1'>
                  <Link to={link.path} className='td-none d-flex jc-space-between ai-center bg-light c-white pt-1 pr-2 pb-1 pl-1 fs-20 fw-bold'>
                    <p>{link.title}</p>
                    <ArrowRightIcon height={32} width={32} color='white' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home | A to B Designs</title>;
