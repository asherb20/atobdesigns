import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Footer from '../components/footer';
import Hero from '../components/hero';
import CallToAction from '../components/cta';
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { URLIcon } from '../lib/icons';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';

const PortfolioPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero title='Portfolio' />
      <div>
        <section className='pb-5'>
          {data.allSanityProject.nodes.map((node: any, index: number) => {
            const bgColor = index % 3 === 0 ? 'dark' : 'white';
            const fontColor = index % 3 === 0 ? 'white' : 'black';
            return (
              <div key={node.id}>
                <div className={`bg-${bgColor} c-${fontColor} pt-5 pr-2 pb-5 pl-2 flex-3`}>
                  <div className='max-w-lg lg-d-flex lg-col-gap-2 m-auto'>
                    <div className='flex-2'>
                      <div className='med-d-flex med-col-gap-2 ai-center'>
                        <h3 className='fs-28 pb-1'>{node.title}</h3>
                        <a
                          href={node.url}
                          style={{ width: 250, height: 50 }}
                          className={`mb-1 fs-20 td-none c-${fontColor} border-solid border-1 border-${fontColor} d-flex jc-center ai-center`}
                        >
                          <URLIcon width={20} height={20} color={fontColor} />
                          <span className='pl-025'>See Live</span>
                        </a>
                      </div>
                      <BlockContent blocks={node._rawContent} />
                    </div>
                    <div className='flex-1'>
                      <GatsbyImage image={node.image.asset.gatsbyImageData} alt={node.image.asset.altText} />
                    </div>
                  </div>
                </div>
                <div className='flex-1' />
              </div>
            );
          })}
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

export const Head: HeadFC = () => (
  <>
    <title>A to B Designs Portfolio</title>
    <meta
      name='description'
      content="Explore A to B Designs' portfolio featuring the Make It Make Sense website project. Discover how we crafted an engaging platform for the indie band."
    />
    <meta name='keywords' content='Make It Make Sense website, band website development, music website design, web development portfolio, A to B Designs, band platform' />
  </>
);

export const query = graphql`
  query {
    allSanityProject {
      nodes {
        id
        title
        url
        image {
          asset {
            altText
            gatsbyImageData
          }
        }
        _rawContent
      }
    }
  }
`;
