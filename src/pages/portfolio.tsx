import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Footer from '../components/footer';
import Hero from '../components/hero';
import CallToAction from '../components/cta';
import { StaticImage } from 'gatsby-plugin-image';
import { URLIcon } from '../lib/icons';

const PORTFOLIO_ITEMS = [
  {
    backgroundColor: 'dark',
    fontColor: 'white',
    url: 'https://www.makeitmakesense.band/',
    title: 'Make It Make Sense Band Website',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: <StaticImage src='../images/makeitmakesense_preview.png' alt='Make It Make Sense Band Website' />
  },
  {
    backgroundColor: 'white',
    fontColor: 'black',
    url: 'https://www.us-ecologic.com/',
    title: 'US-EcoLogic Website',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: <StaticImage src='../images/us-ecologic-preview.png' alt='US-EcoLogic Website' />
  },
  {
    backgroundColor: 'dark',
    fontColor: 'white',
    url: 'https://efficiencypromise.com/',
    title: 'Efficiency Promise Web App',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: <StaticImage src='../images/efficiencypromise_preview.png' alt='Efficiency Promise Web App' />
  }
];

const PortfolioPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero title='Portfolio' />
      <div>
        <section className='pb-5'>
          {PORTFOLIO_ITEMS.map(item => (
            <div>
              <div className={`bg-${item.backgroundColor} c-${item.fontColor} pt-5 pr-2 pb-5 pl-2 flex-3`}>
                <div className='max-w-lg lg-d-flex lg-col-gap-2 m-auto'>
                  <div className='flex-2'>
                    <div className='med-d-flex med-col-gap-2 ai-center'>
                      <h3 className='fs-28 pb-1'>{item.title}</h3>
                      <a
                        href={item.url}
                        style={{ width: 250, height: 50 }}
                        className={`mb-1 fs-20 td-none c-${item.fontColor} border-solid border-1 border-${item.fontColor} d-flex jc-center ai-center`}
                      >
                        <URLIcon width={20} height={20} color={item.fontColor} />
                        <span className='pl-025'>See Live</span>
                      </a>
                    </div>
                    <p className='fs-20 pb-1'>{item.content}</p>
                  </div>
                  <div className='flex-1'>{item.image}</div>
                </div>
              </div>
              <div className='flex-1' />
            </div>
          ))}
        </section>
      </div>
      <div>
        <section className='pb-5 d-flex ai-center jc-center'>
          <CallToAction to='/contact-us' title='Become Our Next Client' />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PortfolioPage;

export const Head: HeadFC = () => <title>Portfolio | A to B Designs</title>;
