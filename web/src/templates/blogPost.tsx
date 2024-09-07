import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Footer from '../components/footer';
import { GatsbyImage } from 'gatsby-plugin-image';
import BlockContent from '@sanity/block-content-to-react';
import CallToAction from '../components/cta';

const BlogPost: React.FC<PageProps> = ({ pageContext }: { pageContext: any }) => {
  const dateArray = pageContext.publishedDate.split('-');
  return (
    <div>
      <Nav />
      <div>
        <div className='pt-5 pr-2 pb-5 pl-2 max-w-md m-auto'>
          <div className='pb-2'>
            <h1 className='text-center c-dark'>{pageContext.title}</h1>
          </div>
          <div className='d-flex pb-2 d-flex jc-center'>
            <div>
              <GatsbyImage className='border-circle' alt={pageContext.author.image.asset.altText} image={pageContext.author.image.asset.gatsbyImageData} />
            </div>
            <div className='pl-1 d-flex ai-flex-end'>
              <div>
                <p>
                  <strong>{pageContext.author.name}</strong>
                </p>
                <p>Published on {`${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`}</p>
              </div>
            </div>
          </div>
          <div>
            <BlockContent className='block-content' blocks={pageContext._rawContent} />
          </div>
        </div>
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

export default BlogPost;

export const Head: HeadFC = ({ pageContext }: any) => {
  return (
    <>
      <title>{pageContext.title} | A to B Designs</title>
      <meta name='description' content={pageContext.description} />
    </>
  );
};
