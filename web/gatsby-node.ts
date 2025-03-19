// import BlogPost from './src/templates/BlogPost';
// import './src/styles/global.css';
import path from 'path';

export const createPages = async ({ graphql, actions }: { graphql: any; actions: any }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allSanityBlogPost {
        nodes {
          id
          title
          description
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
          _rawContent
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw result.errors;
  }

  const blogPosts = result.data.allSanityBlogPost.nodes || [];
  blogPosts.forEach((node: any) => {
    createPage({
      path: `/blog/${node.slug.current}`,
      component: path.resolve('./src/templates/blogPost.tsx'),
      context: node
    });
  });
};
