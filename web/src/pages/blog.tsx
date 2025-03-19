import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Footer from '../components/footer';
import Hero from '../components/hero';
import CallToAction from '../components/cta';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const BlogPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero title='Portfolio' />
      <div>
        <section className='pb-5'></section>
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

export default BlogPage;

export const Head: HeadFC = () => (
  <>
    <title>A to B Designs Blog</title>
    <meta name='description' content="Explore A to B Designs' blog. Discover best practices for web, mobile, and cloud development." />
    <meta name='keywords' content='website development, website design, web development blog, A to B Designs' />
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
