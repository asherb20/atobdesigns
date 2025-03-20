import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Footer from '../components/footer';
import Hero from '../components/hero';
import CallToAction from '../components/cta';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';

const BlogPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  return (
    <div>
      <Nav />
      {/* main */}
      <Hero title='Blog' />
      <div className='max-w-lg m-auto pr-2 pl-2'>
        <section className='pb-5 med-d-flex med-col-gap-2 med-flex-wrap'>
          {data.allSanityBlogPost.nodes.map((node: any) => (
            <Link key={node.slug.current} to={`/blog/${node.slug.current}`} className='td-none med-flex-50'>
              <div style={{ minHeight: 250 }} className='bg-light p-1 mb-3 d-flex flex-col jc-space-between box-shadow-hover trans-all'>
                <div className='pb-2'>
                  <p className='c-white fs-28 pb-05'>
                    <strong>{node.title}</strong>
                  </p>
                  <div className='border-solid border-1 border-white p-05 d-inline-block'>
                    <p className='c-white'>{node.blogType}</p>
                  </div>
                </div>
                <div className='d-flex ai-center'>
                  <GatsbyImage className='border-circle' image={node.author.image.asset.gatsbyImageData} alt={node.author?.image?.asset?.altText || ''} />
                  <div className='c-white pl-05'>
                    <p>
                      <strong>{node.author.name}</strong>
                    </p>
                    <p>{node.publishedDate}</p>
                  </div>
                </div>
              </div>
            </Link>
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
    allSanityBlogPost {
      nodes {
        id
        title
        slug {
          current
        }
        author {
          id
          name
          image {
            asset {
              id
              altText
              gatsbyImageData(width: 50, height: 50)
            }
          }
        }
        publishedDate
        blogType
      }
    }
  }
`;
