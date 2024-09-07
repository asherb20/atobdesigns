import * as React from 'react';
import { HeadFC, PageProps, graphql } from 'gatsby';
import Nav from '../components/nav';
import '../styles/global.css';
import Footer from '../components/footer';
import Hero from '../components/hero';

const BlogPost: React.FC<PageProps> = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <div>
      <Nav />
      <h1></h1>
      <Footer />
    </div>
  );
};

export default BlogPost;

export const Head: HeadFC = ({ pageContext }: any) => {
  return (
    <>
      <title>{pageContext.title} | A to B Designs</title>
    </>
  );
};

// export const query = graphql`
//   query ($id: String!) {
//     product(id: { eq: $id }) {
//       name
//       description
//       appearance
//       meta {
//         createdAt
//         id
//         sku
//       }
//     }
//   }
// `;
